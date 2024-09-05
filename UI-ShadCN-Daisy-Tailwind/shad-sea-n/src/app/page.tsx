'use client'

import { useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from 'next/link'

// this was generated using V0 from vercel, Add Block to Project : Run this command to add this Block to an existing project or to create a new one.
// npx shadcn@latest add "https://v0.dev/chat/b/AGQFCWw?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..VqfqrDRdJXG16Gj7.TJlUBeNmBMV7Mth-rQznzlAC5eSgiQmL_-xpJPBnd2LMAUfG4P0.oOFN1rWcSbXV2zUSS833nw"

const components = [
  { name: "Accordion", description: "A vertically stacked set of interactive headings that each reveal a section of content.", docLink: "https://ui.shadcn.com/docs/components/accordion" },
  { name: "Alert", description: "Displays a callout for user attention.", docLink: "https://ui.shadcn.com/docs/components/alert" },
  { name: "AlertDialog", description: "A modal dialog that interrupts the user with important content and expects a response.", docLink: "https://ui.shadcn.com/docs/components/alert-dialog" },
  { name: "AspectRatio", description: "Displays content within a desired ratio.", docLink: "https://ui.shadcn.com/docs/components/aspect-ratio" },
  { name: "Avatar", description: "An image element with a fallback for representing the user.", docLink: "https://ui.shadcn.com/docs/components/avatar" },
  { name: "Badge", description: "Displays a badge or a component that looks like a badge.", docLink: "https://ui.shadcn.com/docs/components/badge" },
  { name: "Breadcrumb", description: "Displays the hierarchical path to the current page or resource.", docLink: "https://ui.shadcn.com/docs/components/breadcrumb" },
  { name: "Button", description: "Displays a button or a component that looks like a button.", docLink: "https://ui.shadcn.com/docs/components/button" },
  { name: "Calendar", description: "A date field component that allows users to enter and edit date.", docLink: "https://ui.shadcn.com/docs/components/calendar" },
  { name: "Card", description: "Displays a card with header, content, and footer.", docLink: "https://ui.shadcn.com/docs/components/card" },
  { name: "Carousel", description: "A carousel component for cycling through elements.", docLink: "https://ui.shadcn.com/docs/components/carousel" },
  { name: "Checkbox", description: "A control that allows the user to toggle between checked and not checked.", docLink: "https://ui.shadcn.com/docs/components/checkbox" },
  { name: "Collapsible", description: "An interactive component which expands/collapses a panel.", docLink: "https://ui.shadcn.com/docs/components/collapsible" },
  { name: "Combobox", description: "Autocomplete input and command palette with a list of suggestions.", docLink: "https://ui.shadcn.com/docs/components/combobox" },
  { name: "Command", description: "Fast, composable, unstyled command menu for React.", docLink: "https://ui.shadcn.com/docs/components/command" },
  { name: "ContextMenu", description: "Displays a menu to the user — such as a set of actions or functions — triggered by a button.", docLink: "https://ui.shadcn.com/docs/components/context-menu" },
  { name: "Dialog", description: "A window overlaid on either the primary window or another dialog window.", docLink: "https://ui.shadcn.com/docs/components/dialog" },
  { name: "DropdownMenu", description: "Displays a menu to the user — such as a set of actions or functions — triggered by a button.", docLink: "https://ui.shadcn.com/docs/components/dropdown-menu" },
  { name: "Form", description: "Building forms with React Hook Form.", docLink: "https://ui.shadcn.com/docs/components/form" },
  { name: "HoverCard", description: "For sighted users to preview content available behind a link.", docLink: "https://ui.shadcn.com/docs/components/hover-card" },
  { name: "Input", description: "Displays a form input field or a component that looks like an input field.", docLink: "https://ui.shadcn.com/docs/components/input" },
  { name: "Label", description: "Renders an accessible label associated with controls.", docLink: "https://ui.shadcn.com/docs/components/label" },
  { name: "Menubar", description: "A visually persistent menu common in desktop applications.", docLink: "https://ui.shadcn.com/docs/components/menubar" },
  { name: "NavigationMenu", description: "A collection of links for navigating websites.", docLink: "https://ui.shadcn.com/docs/components/navigation-menu" },
  { name: "Popover", description: "Displays rich content in a portal, triggered by a button.", docLink: "https://ui.shadcn.com/docs/components/popover" },
  { name: "Progress", description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.", docLink: "https://ui.shadcn.com/docs/components/progress" },
  { name: "RadioGroup", description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.", docLink: "https://ui.shadcn.com/docs/components/radio-group" },
  { name: "ScrollArea", description: "Augments native scroll functionality for custom, cross-browser styling.", docLink: "https://ui.shadcn.com/docs/components/scroll-area" },
  { name: "Select", description: "Displays a list of options for the user to pick from—triggered by a button.", docLink: "https://ui.shadcn.com/docs/components/select" },
  { name: "Separator", description: "Visually or semantically separates content.", docLink: "https://ui.shadcn.com/docs/components/separator" },
  { name: "Sheet", description: "Extends the Dialog component to display content that complements the main content of the screen.", docLink: "https://ui.shadcn.com/docs/components/sheet" },
  { name: "Skeleton", description: "Use to show a placeholder while content is loading.", docLink: "https://ui.shadcn.com/docs/components/skeleton" },
  { name: "Slider", description: "An input where the user selects a value from within a given range.", docLink: "https://ui.shadcn.com/docs/components/slider" },
  { name: "Switch", description: "A control that allows the user to toggle between checked and not checked.", docLink: "https://ui.shadcn.com/docs/components/switch" },
  { name: "Table", description: "A responsive table component.", docLink: "https://ui.shadcn.com/docs/components/table" },
  { name: "Tabs", description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.", docLink: "https://ui.shadcn.com/docs/components/tabs" },
  { name: "Textarea", description: "Displays a form textarea or a component that looks like a textarea.", docLink: "https://ui.shadcn.com/docs/components/textarea" },
  { name: "Toast", description: "A succinct message that is displayed temporarily.", docLink: "https://ui.shadcn.com/docs/components/toast" },
  { name: "Toggle", description: "A two-state button that can be either on or off.", docLink: "https://ui.shadcn.com/docs/components/toggle" },
  { name: "Tooltip", description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.", docLink: "https://ui.shadcn.com/docs/components/tooltip" },
].sort((a, b) => a.name.localeCompare(b.name))

export default function ComponentShowcase() {
  const [selectedComponent, setSelectedComponent] = useState(components[0])

  const ComponentExample = dynamic(() => import(`@/components/examples/${selectedComponent.name}Example`), {
    loading: () => <p>Loading...</p>,
    ssr: false,
  })

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 border-r">
        <h2 className="text-2xl font-bold mb-4">shadcn Components</h2>
        <ScrollArea className="h-[calc(100vh-100px)]">
          <div className="grid grid-cols-2 gap-2">
            {components.map((component) => (
              <Button
                key={component.name}
                variant="outline"
                className="justify-start"
                onClick={() => setSelectedComponent(component)}
              >
                {component.name}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Component Example</h2>
        <Select onValueChange={(value) => setSelectedComponent(components.find(c => c.name === value) || components[0])}>
          <SelectTrigger>
            <SelectValue placeholder="Select a component" />
          </SelectTrigger>
          <SelectContent>
            {components.map((component) => (
              <SelectItem key={component.name} value={component.name}>
                {component.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>{selectedComponent.name}</CardTitle>
            <CardDescription>{selectedComponent.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div>Loading...</div>}>
              <ComponentExample />
            </Suspense>
            <div className="mt-4">
              <Link href={selectedComponent.docLink} target="_blank" rel="noopener noreferrer">
                <Button>View Documentation</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
