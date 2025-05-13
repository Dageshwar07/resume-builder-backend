const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    thumbnailLink: {
      type: String,
    },
    template: {
      theme: String,
      colorPalette: [String],
    },

    profileInfo: {
      profilePreviewUrl: String,
      fullName: String,
      designation: String,
      summary: String,
    },

    contactInfo: {
      email: String,
      phone: String,
      location: String,
      linkedin: String,
      github: String,
      website: String,
    },

    professionalSummary: {
      type: String,
    },

    technicalSkills: {
      fullStack: [String],
      programmingLanguages: [String],
      frontend: [String],
      backend: [String],
      systemDesign: [String],
      databases: [String],
      devOps: [String],
      cloud: [String],
      versionControl: [String],
      requirementsAnalysis: [String],
    },

    workExperience: [
      {
        company: String,
        role: String,
        startDate: String,
        endDate: String,
        description: String,
        technologies: [String],
        projects: [
          {
            name: String,
            description: String,
            achievements: [String],
          },
        ],
      },
    ],

    education: [
      {
        degree: String,
        institution: String,
        startDate: String,
        endDate: String,
        cgpa: String,
      },
    ],

    skills: [
      {
        name: String,
        progress: Number,
      },
    ],

    projects: [
      {
        title: String,
        description: String,
        github: String,
        liveDemo: String,
      },
    ],

    certifications: [
      {
        title: String,
        issuer: String,
        year: String,
      },
    ],

    languages: [
      {
        name: String,
        progress: Number,
      },
    ],

    interests: [String],

    accomplishments: [
      {
        description: String,
      },
    ],
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("Resume", ResumeSchema);
