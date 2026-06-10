export const config = {
  photographer: {
    name: "Jo Lyons Photography",
    logoPath: "/logo.png",
    websiteUrl: "https://jolyonsphotography.com",
    ctaLabel: "Back to the client lounge",
    ctaUrl: "https://jolyonsphotography.com/client-lounge",
  },
  branding: {
    Teal: "#07A4AF",
    Brown: "#6B5548",
    LightTeal: "#F0FAFB",
    Ivory: "#FAF8F5",
    ivoryLight: "#F7F3EE",
    terracotta: "#C97B5A",
    warmSand: "#D9C2A6",
    darkTeal: "#0D5158",
    sage: "#A3AD8C",
    headingFont: "KOMET HEAVY",
    bodyFont: "Solomon Sans Normal",
  },
  copy: {
    pageTitle: "What to Wear for Your Session",
    pageSubtitle: "Upload a clear photo of your dog and I'll put together a personalised colour palette showing you exactly what to wear on the day.",
    uploadGuidelines: [
      "A clear photo of your dog in good light",
      "Just your dog — one at a time for the most accurate result",
      "Coat and face clearly visible, as close as you can get",
    ],
    privacyNote: "Your photo isn't stored after analysis",
  },
} as const