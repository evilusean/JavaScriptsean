'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUpRight } from 'lucide-react'

const components = [
  { name: 'Button', description: 'Displays a button or a component that looks like a button.' },
  { name: 'Card', description: 'Displays a card with header, content, and footer.' },
  { name: 'Checkbox', description: 'A control that allows the user to toggle between checked and not checked.' },
  { name: 'Input', description: 'Displays a form input field or a component that looks like an input field.' },
  { name: 'Radio Group', description: 'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.' },
  { name: 'Select', description: 'Displays a list of options for the user to pick from—triggered by a button.' },
  { name: 'Separator', description: 'A horizontal or vertical separator with an optional label.' },
  { name: 'Slider', description: 'An input where the user selects a value from within a given range.' },
  { name: 'Switch', description: 'A control that allows the user to toggle between checked and not checked.' },
  { name: 'Tabs', description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.' },
]

export default function Component() {
  const [selectedComponent, setSelectedComponent] = useState(components[0])
  const [customization, setCustomization] = useState({
    variant: 'default',
    size: 'default',
    orientation: 'horizontal',
    disabled: false
  })

  const handleCustomizationChange = (key: string, value: string | boolean) => {
    setCustomization(prev => ({ ...prev, [key]: value }))
  }

  const renderCustomizationOptions = () => {
    switch (selectedComponent.name) {
      case 'Button':
        return (
          <>
            <Select value={customization.variant} onValueChange={(value) => handleCustomizationChange('variant', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select variant" />
              </SelectTrigger>
              <SelectContent>
                {['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'].map((variant) => (
                  <SelectItem key={variant} value={variant}>{variant}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={customization.size} onValueChange={(value) => handleCustomizationChange('size', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                {['default', 'sm', 'lg'].map((size) => (
                  <SelectItem key={size} value={size}>{size}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </>
        )
      case 'Card':
        return null // Cards don't have specific customization options in shadcn/ui
      case 'Checkbox':
      case 'Switch':
        return (
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled" checked={customization.disabled} onCheckedChange={(checked) => handleCustomizationChange('disabled', checked)} />
            <label htmlFor="disabled">Disabled</label>
          </div>
        )
      case 'Input':
        return (
          <Select value={customization.size} onValueChange={(value) => handleCustomizationChange('size', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {['default', 'sm', 'lg'].map((size) => (
                <SelectItem key={size} value={size}>{size}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      case 'Radio Group':
        return (
          <Select value={customization.orientation} onValueChange={(value) => handleCustomizationChange('orientation', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select orientation" />
            </SelectTrigger>
            <SelectContent>
              {['horizontal', 'vertical'].map((orientation) => (
                <SelectItem key={orientation} value={orientation}>{orientation}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      case 'Select':
        return null // Select doesn't have specific customization options in shadcn/ui
      case 'Separator':
        return (
          <Select value={customization.orientation} onValueChange={(value) => handleCustomizationChange('orientation', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select orientation" />
            </SelectTrigger>
            <SelectContent>
              {['horizontal', 'vertical'].map((orientation) => (
                <SelectItem key={orientation} value={orientation}>{orientation}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      case 'Slider':
        return (
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled" checked={customization.disabled} onCheckedChange={(checked) => handleCustomizationChange('disabled', checked)} />
            <label htmlFor="disabled">Disabled</label>
          </div>
        )
      case 'Tabs':
        return null // Tabs don't have specific customization options in shadcn/ui
      default:
        return null
    }
  }

  const renderComponentExample = () => {
    switch (selectedComponent.name) {
      case 'Button':
        return (
          <Button variant={customization.variant as any} size={customization.size as any}>
            {selectedComponent.name}
          </Button>
        )
      case 'Card':
        return (
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
        )
      case 'Checkbox':
        return (
          <div className="flex items-center space-x-2">
            <Checkbox id="example-checkbox" disabled={customization.disabled} />
            <label htmlFor="example-checkbox">Accept terms and conditions</label>
          </div>
        )
      case 'Input':
        return (
          <Input type="text" placeholder="Input" size={customization.size as any} />
        )
      case 'Radio Group':
        return (
          <RadioGroup orientation={customization.orientation as any}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option1" id="option1" />
              <Label htmlFor="option1">Option 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option2" id="option2" />
              <Label htmlFor="option2">Option 2</Label>
            </div>
          </RadioGroup>
        )
      case 'Select':
        return (
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        )
      case 'Separator':
        return (
          <div className={customization.orientation === 'vertical' ? 'h-[100px] flex items-center' : ''}>
            <Separator orientation={customization.orientation as any} />
          </div>
        )
      case 'Slider':
        return (
          <Slider defaultValue={[50]} max={100} step={1} disabled={customization.disabled} />
        )
      case 'Switch':
        return (
          <div className="flex items-center space-x-2">
            <Switch id="example-switch" disabled={customization.disabled} />
            <Label htmlFor="example-switch">Toggle me</Label>
          </div>
        )
      case 'Tabs':
        return (
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </Tabs>
        )
      default:
        return null
    }
  }

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
        <div className="mb-4 space-y-2">
          {renderCustomizationOptions()}
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
          {renderComponentExample()}
        </div>
      </div>
    </div>
  )
}