<script setup lang="ts">
import { reactive } from "vue";
import CommandExplainer from "@/components/CommandExplainer";
import { Type, type Command } from "@/components/CommandExplainer/model";
import commonGroups from "./commonGroups";

const command: Command = {
  name: "snartomo-pace",
  groups: [
    {
      name: "Required",
      arguments: [
        {
          name: "target_file",
          required: true,
          description:
            "A key input for SNARTomoPace is the target file, typically with a filename of the form *_tgts.txt. SNARTomoPACE expects the tilt-series MDOC files (typically with a filename of the form *ts*.mdoc) to be in the same directory as the target file.",
        },
        {
          name: "gain_file",
          required: true,
          description: `The gain file is used to compensate for systematic errors in the camera.

The gain file can either be in TIFF or MRC format. If it's in TIFF format, SNARTomo will automatically convert it to MRC for use with MotionCor2.`,
        },
        {
          name: "last_tilt",
          required: true,
          description: `SNARTomoPACE needs a signal to decide when to start computing the 3D reconstruction. That signal is when the last angle in the last tilt series in the target file is reached.

NOTE1: The last angle does not necessarily correspond to the highest tilt angle, simply the chronologically last tilt angle. Under typical usage, the last tilt angle will generally be the most-negative angle.

NOTE2: It is assumed that every tilt series is collected to the same last angle. If the last angle varies, the program may get stuck while looking for an EER file which will never exist. Instead, run SNARTomoPACE separately for tilt series which are collected to a different last angle.`,
        },
        {
          name: "frame_file",
          required: true,
          description: `The frame file is used by MotionCor2 for dose-weighting. It is a text file containing the following three values, separated by spaces:

The number of frames to include
The number of EER frames to merge in each motion-corrected frame
The dose per EER frame
The first value will probably simply be the total number of frames collected. However, you might limit the number frames to include if, for example, your exposure was too long, and you want to keep only the least radiation-damaged frames.

For the second value, a reasonable rule of thumb is to accumulate 0.15-0.20 electrons per Å2. For example, at a dose of 3e/Å2 distributed over 600 frames, the dose per EER frame would be 0.005. To accumulate 0.15e/Å2, you would need to merge 0.15/(3/600) = 30 frames. The line in the frame file would thus be:

600 30 0.005

In theory, a frames file can have multiple lines, if for example the first N frames were to be handled differently than the next M frames. However, we haven't tested this functionality yet.`,
        },
      ],
    },
    {
      name: "Global",
      arguments: [
        {
          name: "eer_dir",
          default: "frames",
          description: "Input EER directory",
        },
        {
          name: "tilt_tolerance",
          default: 0.2,
          description: "Pixel size, Å/px",
        },
        {
          name: "outdir",
          default: "SNARTomo",
          description: "Output directory",
        },
        {
          name: "apix",
          default: -1.0,
          description: "Pixel size, Å/px",
        },
        {
          name: "testing",
          default: "false",
          description: "Testing mode",
          type: Type.Bool,
        },
        {
          name: "slow",
          default: "false",
          description: "In testing mode, simulates a delay in file creation",
          type: Type.Bool,
        },
        {
          name: "overwrite",
          default: "false",
          description: "Overwrite output directory (only if no EERs)",
          type: Type.Bool,
        },
        {
          name: "max_minutes",
          default: 100,
          description: "Maximum run time, minutes",
        },
        {
          name: "verbosity",
          default: 2,
          description: "Verbosity level (0..9)",
        },
        {
          name: "wait",
          default: 2,
          description: "Interval to check for new micrographs, seconds",
        },
        {
          name: "kv",
          default: 300.0,
          description: "Voltage, kV",
        },
        {
          name: "gpus",
          default: '"0 1 2"',
          description:
            "GPUs to use (space-delimited and in quotes if more than one)",
        },
      ],
    },
    ...commonGroups,
  ],
};
const state = reactive({
  command: command,
});
</script>

<template>
  <main>
    <CommandExplainer v-bind="state.command" />
  </main>
</template>
