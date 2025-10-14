export default function GradientBackground() {
  return (
    <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/20 to-background"></div>
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50">
        </div>
         <div 
          className="absolute inset-0 bg-[linear-gradient(45deg,hsl(var(--accent)/0.1)_25%,transparent_25%,transparent_50%,hsl(var(--accent)/0.1)_50%,hsl(var(--accent)/0.1)_75%,transparent_75%,transparent),linear-gradient(-45deg,hsl(var(--accent)/0.1)_25%,transparent_25%,transparent_50%,hsl(var(--accent)/0.1)_50%,hsl(var(--accent)/0.1)_75%,transparent_75%,transparent)] bg-[size:3rem_3rem] opacity-50">
        </div>
      </div>
  )
}
