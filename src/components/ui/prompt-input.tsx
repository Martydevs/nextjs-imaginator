"use client";

import { CornerDownLeft, Paperclip } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PromptInputProps {}

export default function PromptInput({}: PromptInputProps) {
  return (
    <form className="absolute bottom-0 w-3/6 overflow-hidden rounded-lg p-2 mb-8 dark:bg-slate-800 bg-zinc-900">
      <Label htmlFor="prompt" className="sr-only">
        Message
      </Label>
      <Textarea
        id="prompt"
        name="prompt"
        placeholder="Escribe tu mensaje..."
        className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0 text-white placeholder:text-white"
      />
      <div className="flex items-center p-3 pt-0">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" type="button">
              <Paperclip className="size-4 text-white" />
              <span className="sr-only">Adjuntar</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">Agregar</TooltipContent>
        </Tooltip>
        <Button type="submit" size="default" className="ml-auto gap-1.5 bg-blue-600 text-white">
          Enviar
          <CornerDownLeft className="size-3.5" />
        </Button>
      </div>
    </form>
  );
}
