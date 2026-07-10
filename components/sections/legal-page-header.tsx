import { FileText } from "lucide-react"
import Container from "../layout/container"

type Props = {
  title: string
  lastUpdated : string
}

export default function LegalPageHeader({ title, lastUpdated }: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div
        className="absolute top-0 right-0 w-120 h-120 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 90% 0%, rgba(20,55,255,0.09) 0%, rgba(106,46,255,0.05) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-120 h-120 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 10% 0%, rgba(154,45,255,0.07) 0%, rgba(201,166,255,0.04) 45%, transparent 70%)",
        }}
      />

      <Container className="relative pt-44 pb-28 text-center">
        <div
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-14 font-semibold"
          style={{
            background:
              "linear-gradient(135deg, rgba(20,55,255,0.08) 0%, rgba(154,45,255,0.10) 100%)",
            border: "1px solid rgba(106,46,255,0.22)",
            color: "#6A2EFF",
          }}
        >
          <FileText size={13} className="shrink-0" />
          Last Updated : {lastUpdated}
        </div>

        <h1 className="text-h1-mobile md:text-h1 text-ink font-bold font-heading">
          {title}
        </h1>
      </Container>

      {/* Bottom gradient divider */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(20,55,255,0.35) 30%, rgba(154,45,255,0.35) 70%, transparent 100%)",
        }}
      />
    </section>
  )
}