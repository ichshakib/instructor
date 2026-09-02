import { Button } from "@repo/ui/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@repo/ui/components/ui/card";
import { Badge } from "@repo/ui/components/ui/badge";
import { Input } from "@repo/ui/components/ui/input";
import { Avatar, AvatarFallback } from "@repo/ui/components/ui/avatar";
import { Separator } from "@repo/ui/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between antialiased">
      {/* Top Header */}
      <header className="border-b bg-card/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground font-bold">W</AvatarFallback>
            </Avatar>
            <span className="font-semibold text-base tracking-tight">Web App</span>
          </div>

          <Badge variant="outline" className="border-emerald-500/40 text-emerald-600 dark:text-emerald-400 gap-1.5 py-1 px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            shadcn/ui + Tailwind v4
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 flex-1 flex flex-col items-center justify-center text-center">
        {/* Monorepo Tag */}
        <div className="mb-4">
          <Badge variant="secondary" className="px-3 py-1 text-xs">
            Turborepo Monorepo • apps/web
          </Badge>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-2xl leading-tight">
          shadcn/ui Components in{" "}
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Shared Monorepo
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
          Components are imported from <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">@repo/ui</code> with full variants, Radix primitives, and design tokens.
        </p>

        {/* Interactive shadcn showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left mt-10">
          {/* Card 1: Buttons & Badges */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Button Variants</CardTitle>
                <Badge>Active</Badge>
              </div>
              <CardDescription>
                Reusable CVA button variants exported from @repo/ui
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button variant="default" size="sm">Default</Button>
              <Button variant="secondary" size="sm">Secondary</Button>
              <Button variant="outline" size="sm">Outline</Button>
              <Button variant="destructive" size="sm">Destructive</Button>
            </CardContent>
            <Separator />
            <CardFooter className="pt-4 flex justify-between items-center text-xs text-muted-foreground">
              <span>Variants: default, secondary, outline, destructive</span>
            </CardFooter>
          </Card>

          {/* Card 2: Interactive Form & Input */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Form Input</CardTitle>
                <Badge variant="outline">Input</Badge>
              </div>
              <CardDescription>
                Accessible inputs with focus rings and CSS variable tokens
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2">
                <Input placeholder="Enter your email..." className="flex-1" />
                <Button variant="default">Subscribe</Button>
              </div>
            </CardContent>
            <Separator />
            <CardFooter className="pt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Avatar className="h-5 w-5">
                <AvatarFallback>UI</AvatarFallback>
              </Avatar>
              <span>Imported directly from @repo/ui/input</span>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 bg-card/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">
              shadcn/ui Docs
            </a>
            <span>•</span>
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">
              Tailwind CSS
            </a>
            <span>•</span>
            <a href="https://turborepo.dev" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">
              Turborepo
            </a>
          </div>

          <div>
            Edit <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-xs">apps/web/app/page.tsx</code>
          </div>
        </div>
      </footer>
    </div>
  );
}
