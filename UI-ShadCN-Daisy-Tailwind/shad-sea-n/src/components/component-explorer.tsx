'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ArrowUpRight } from 'lucide-react'

const components = [
  { name: 'Accordion', description: 'A vertically stacked set of interactive headings that each reveal a section of content.' },
  { name: 'Alert', description: 'Displays a callout for user attention.' },
  { name: 'Alert Dialog', description: 'A modal dialog that interrupts the user with important content and expects a response.' },
  { name: 'Aspect Ratio', description: 'Displays content within a desired ratio.' },
  { name: 'Avatar', description: 'An image element with a fallback for representing the user.' },
  { name: 'Badge', description: 'Displays a badge or a component that looks like a badge.' },
  { name: 'Button', description: 'Displays a button or a component that looks like a button.' },
  { name: 'Calendar', description: 'A date field component that allows users to enter and edit date.' },
  { name: 'Card', description: 'Displays a card with header, content, and footer.' },
  { name: 'Checkbox', description: 'A control that allows the user to toggle between checked and not checked.' },
  { name: 'Collapsible', description: 'An interactive component which expands/collapses a panel.' },
  { name: 'Command', description: 'Fast, composable, unstyled command menu for React.' },
  { name: 'Context Menu', description: 'Displays a menu to the user — such as a set of actions or functions — triggered by a button.' },
  { name: 'Dialog', description: 'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.' },
  { name: 'Dropdown Menu', description: 'Displays a menu to the user — such as a set of actions or functions — triggered by a button.' },
  { name: 'Hover Card', description: 'For sighted users to preview content available behind a link.' },
  { name: 'Input', description: 'Displays a form input field or a component that looks like an input field.' },
  { name: 'Label', description: 'Renders an accessible label associated with controls.' },
  { name: 'Menubar', description: 'A horizontal menu bar with clickable menu items.' },
  { name: 'Navigation Menu', description: 'A collection of links for navigating websites.' },
  { name: 'Popover', description: 'Displays rich content in a portal, triggered by a button.' },
  { name: 'Progress', description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.' },
  { name: 'Radio Group', description: 'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.' },
  { name: 'Scroll Area', description: 'Augments native scroll functionality for custom, cross-browser styling.' },
  { name: 'Select', description: 'Displays a list of options for the user to pick from—triggered by a button.' },
  { name: 'Separator', description: 'A horizontal or vertical separator with an optional label.' },
  { name: 'Sheet', description: 'Extends the Dialog component to display content that complements the main content of the screen.' },
  { name: 'Skeleton', description: 'Use to show a placeholder while content is loading.' },
  { name: 'Slider', description: 'An input where the user selects a value from within a given range.' },
  { name: 'Switch', description: 'A control that allows the user to toggle between checked and not checked.' },
  { name: 'Table', description: 'A responsive table component.' },
  { name: 'Tabs', description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.' },
  { name: 'Textarea', description: 'Displays a form textarea or a component that looks like a textarea.' },
  { name: 'Toast', description: 'A succinct message that is displayed temporarily.' },
  { name: 'Toggle', description: 'A two-state button that can be either on or off.' },
  { name: 'Tooltip', description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.' },
]

export function ComponentExplorer() {
  const [selectedComponent, setSelectedComponent] = useState(components[0])
  const [selectedColor, setSelectedColor] = useState('default')

  const colors = ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']

  return (
    <div className="flex h-screen">
      <div className="w-1/2 overflow-y-auto border-r">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">shadcn Components</h2>
          <ul>
            {components.map((component) => (
              <li key={component.name}>
                <button
                  className={`w-full text-left p-2 hover:bg-gray-100 ${
                    selectedComponent.name === component.name ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => setSelectedComponent(component)}
                >
                  {component.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-1/2 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{selectedComponent.name}</h2>
        <p className="mb-4">{selectedComponent.description}</p>
        <h3 className="text-xl font-semibold mb-2">Customization</h3>
        <div className="mb-4">
          <Label htmlFor="color-select">Color</Label>
          <Select value={selectedColor} onValueChange={setSelectedColor}>
            <SelectTrigger id="color-select">
              <SelectValue placeholder="Select a color" />
            </SelectTrigger>
            <SelectContent>
              {colors.map((color) => (
                <SelectItem key={color} value={color}>
                  {color}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <a
          href={`https://ui.shadcn.com/docs/components/${selectedComponent.name.toLowerCase().replace(' ', '-')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-500 hover:underline mb-4"
        >
          View Documentation
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
        <h3 className="text-xl font-semibold mb-2">Example</h3>
        <div className="p-4 border rounded">
          {selectedComponent.name === 'Button' && (
            <Button variant={selectedColor as any}>{selectedComponent.name}</Button>
          )}
          {selectedComponent.name === 'Card' && (
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          )}
          {selectedComponent.name === 'Input' && (
            <Input type="text" placeholder="Input" />
          )}
          {selectedComponent.name === 'Select' && (
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          )}
          {selectedComponent.name === 'Separator' && (
            <Separator className="my-4" />
          )}
          {/* Add more component examples here */}
        </div>
      </div>
    </div>
  )
}