import { CheckCircle } from 'lucide-react'

const SuccessMessage = () => {
  return (
    <div className="flex flex-col items-center text-center py-8 gap-5">

      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
          <CheckCircle size={32} className="text-emerald-400" strokeWidth={1.5} />
        </div>
        <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-ping" />
      </div>

      <div className="space-y-2">
        <h3 className="text-h4 font-semibold text-content-primary">Application Received!</h3>
        <p className="text-body-sm text-content-muted max-w-xs">
          Thank you for your interest. Our team will reach you on your phone and email.
        </p>
      </div>

      <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/8 border border-emerald-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
        <p className="text-caption text-emerald-400 font-medium">We typically respond within a few hours</p>
      </div>

    </div>
  )
}

export default SuccessMessage
