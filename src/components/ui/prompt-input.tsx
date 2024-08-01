"use client";

import { CornerDownLeft, Download, Paperclip, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dispatch, useRef } from "react";
import { toast } from "sonner";

interface PromptInputProps {
  onSubmit: (e: React.FormEvent) => void;
  onReset: Dispatch<React.SetStateAction<string>>;
  imageSrc: string;
  isLoading: boolean;
}

export default function PromptInput({ onSubmit, onReset, imageSrc }: PromptInputProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleReset = () => {
    toast.success("Área de trabajo limpiada");
    onReset("");
  };

  const handleDownload = () => {
    if (imageSrc) {
      const anchor = document.createElement("a");
      anchor.href = imageSrc;
      anchor.download = "image.webp";
      anchor.click();
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="absolute bottom-0 w-3/5 overflow-hidden rounded-lg p-2 mb-2 dark:bg-slate-800 bg-zinc-900"
    >
      <Label htmlFor="prompt" className="sr-only">
        Message
      </Label>
      <Textarea
        id="prompt"
        name="prompt"
        placeholder="Ingresa tu prompt..."
        className="min-h-12 resize-none border-0 p-2 shadow-none focus-visible:ring-0 text-white placeholder:text-white"
      />
      <div className="flex items-center p-3 pt-0">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" type="button">
            <Paperclip className="size-4 text-white" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            type="reset"
            onClick={handleReset}
          >
            <Trash className="size-4 text-white" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={handleDownload}
          >
            <Download className="size-4 text-white" />
          </Button>
        </div>

        <Button
          type="submit"
          size="default"
          className="ml-auto gap-1.5 bg-blue-600 text-white"
        >
          Enviar
          <CornerDownLeft className="size-3.5" />
        </Button>
      </div>
    </form>
  );
}
