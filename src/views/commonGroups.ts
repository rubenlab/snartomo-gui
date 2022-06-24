import { Type, type Group } from "@/components/CommandExplainer/model";

const commonGroups: Array<Group> = [
  {
    name: "MotionCor2",
    arguments: [
      {
        name: "motioncor_exe",
        default: "~/rubsak-admin/local/motioncor/MotionCor2",
        description: "MotionCor2 executable",
      },
      {
        name: "patch",
        default: '"0 0"',
        description:
          "	Number of patches in x y, delimited by spaces and in quotes",
      },
      {
        name: "reffrm",
        default: 1,
        description: "Reference frame (0: first, 1: middle)",
      },
      {
        name: "split_sum",
        default: 0,
        description: "Split frames into half-sets (0: no, 1: yes)",
      },
      {
        name: "min_frames",
        default: 400,
        description: "Minimum number of EER frames before warning",
      },
      {
        name: "max_frames",
        default: 1200,
        description: "Maximum number of EER frames before warning",
      },
    ],
  },
  {
    name: "CTFFIND4",
    arguments: [
      {
        name: "ctffind_dir",
        default: "/home/rubsak-admin/local/ctffind/4.1.14/bin",
        description: "CTFFIND executable directory",
      },
      {
        name: "cs",
        default: 2.7,
        description: "Spherical aberration constant",
      },
      {
        name: "ac",
        default: 0.07,
        description: "Amplitude contrast",
      },
      {
        name: "box",
        default: "512",
        description: "Tile size for power-spectrum calculation",
      },
      {
        name: "res_lo",
        default: 30.0,
        description: "Low-resolution limit for CTF fitting, Å",
      },
      {
        name: "res_hi",
        default: 9.0,
        description: "High-resolution limit for CTF fitting, Å",
      },
      {
        name: "df_lo",
        default: 30000.0,
        description: "Minimum defocus value, Å",
      },
      {
        name: "df_hi",
        default: 70000.0,
        description: "Maximum defocus value, Å",
      },
      {
        name: "ast_step",
        default: 100.0,
        description: "Astigmatism search step during fitting, Å",
      },
    ],
  },
  {
    name: "Topaz",
    arguments: [
      {
        name: "do_topaz",
        default: "false",
        description: "Flag to denoise",
        type: Type.Bool,
      },
      {
        name: "topaz_exe",
        default:
          "/home/rubsak-admin/local/miniconda3/4.10.3/envs/topaz/bin/topaz",
        description: "Topaz executable",
      },
      {
        name: "patch_size",
        default: 2048,
        description: "Patch size",
      },
      {
        name: "topaz_env",
        default: "topaz",
        description: "Conda environment",
      },
    ],
  },
  {
    name: "IMOD",
    arguments: [
      {
        name: "imod_dir",
        default: "/usr/local/IMOD/bin",
        description: "IMOD executable directory",
      },
      {
        name: "do_etomo",
        default: "false",
        description: "Flag to reconstruct using eTomo",
        type: Type.Bool,
      },
      {
        name: "batch_directive",
        default: "batchDirective.adoc",
        description: `IMOD batch directive file
https://rubsak.wiki.gwdg.de/doku.php?id=computers:etomo#batch_directive
`,
      },
    ],
  },
  {
    name: "AreTomo",
    arguments: [
      {
        name: "aretomo_exe",
        default:
          "/home/rubsak-admin/local/aretomo/AreTomo_1.0.1-04-03-2021/AreTomo_1.0.1-Cuda111",
        description: "AreTomo executable",
      },
      {
        name: "bin",
        default: 8,
        description: "Binning factor for reconstruction",
      },
      {
        name: "vol_zdim",
        default: 1600,
        description: "z-dimension for volume",
      },
      {
        name: "rec_zdim",
        default: 1000,
        description: "z-dimension for reconstruction",
      },
      {
        name: "tilt_cor",
        default: 1,
        description: "Tilt-correction flag (1: yes, 0: no)",
      },
      {
        name: "bp_method",
        default: 1,
        description:
          "Reconstruction method (1: weighted backprojection, 0: SART)",
      },
      {
        name: "tilt_axis",
        default: 86.0,
        description: "Estimate for tilt-axis direction, degrees",
      },
      {
        name: "flip_vol",
        default: 1,
        description: "Flag to flip coordinates axes (1: yes, 0: no)",
      },
      {
        name: "transfile",
        default: 1,
        description: "Flag to generate IMOD XF files (1: yes, 0: no)",
      },
      {
        name: "patch_align",
        default: '"0 0"',
        description: "Number of patches in x & y (delimited by spaces)",
      },
      {
        name: "duration",
        default: "30m",
        description: "Maximum duration (AreTomo sometimes hangs)",
      },
    ],
  },
];

export default commonGroups;
