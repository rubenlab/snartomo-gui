<script setup lang="ts">
import CommandExplainer from "@/components/CommandExplainer";
import { Type, type Command } from "@/components/CommandExplainer/model";
import commonGroups from "./commonGroups";

const command: Command = {
  name: "snartomo-classic",
  groups: [
    {
      name: "Required",
      arguments: [
        {
          name: "gain_file",
          required: true,
          description: `The gain file is used to compensate for systematic errors in the camera.

The gain file can either be in TIFF or MRC format. If it's in TIFF format, SNARTomo will automatically convert it to MRC for use with MotionCor2.`,
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
          name: "frame_file",
          default: "motioncor-frame.txt",
          description: "Input MotionCor2 frame file",
        },
        {
          name: "mdoc_file",
          description: "Input example MDOC file",
        },
        {
          name: "outdir",
          default: "SNARTomo",
          description: "Output directory",
        },
        {
          name: "cmd_file",
          default: "commands.txt",
          description: "Commands log file, in outdir",
        },
        {
          name: "settings",
          default: "settings.txt",
          description: "Settings file, in outdir",
        },
        {
          name: "verbosity",
          default: 4,
          description: "Verbosity level (0..9)",
        },
        {
          name: "testing",
          default: "false",
          description: "Testing mode",
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
          name: "wait",
          default: 2,
          description: "Interval to check for new micrographs, seconds",
        },
        {
          name: "apix",
          default: -1.0,
          description: "Pixel size, Å/px",
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
</script>

<template>
  <main>
    <CommandExplainer v-bind="command" />
  </main>
</template>
