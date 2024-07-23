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
import Loader from "../ui/loader";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { generateContent } from "@/services/dalle";

function DalleForm() {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { prompt } = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    );

    setIsLoading(true);
    generateContent(prompt as string)
      .then((response) => {
        if (response.isSuccess) {
          setImgSrc(response.data);
        } else {
          setIsError(true);
        }
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section
      className="h-screen w-full flex flex-col items-center justify-between"
      id="dalle-form"
    >
      <section className="w-full h-auto flex items-center justify-center pt-4">
        {isLoading && <Loader /> }
        {isError && <p>Error</p>}
        {imgSrc && !isLoading && (
          <Image
            src={imgSrc}
            alt="Generated image"
            className="rounded-lg"
            width={500}
            height={500}
          />
        )}
      </section>

      <form
        onSubmit={handleSubmit}
        className="absolute bottom-0 w-3/6 overflow-hidden rounded-lg p-2 mb-8 dark:bg-slate-800 bg-zinc-900"
      >
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
    </section>
  );
}

export default DalleForm;
