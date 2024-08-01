"use client";

import dynamic from "next/dynamic";
import { toast } from "sonner";
import Loader from "../ui/loader";
import { FormEvent, useState } from "react";
import { generateContent } from "@/services/dalle";
import PromptInput from "../ui/prompt-input";
import { Skeleton } from "../ui/skeleton";

const DynamicImageContainer = dynamic(() => import("../ui/image-container"), {
  loading: () => <Skeleton className="w-3/5 h-full rounded-xl border-4 border-slate-200" />
})

function DalleForm() {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { prompt } = Object.fromEntries(new FormData(e.target as HTMLFormElement));

    setIsLoading(true);
    generateContent(prompt as string)
      .then((response) => {
        if (response.isSuccess) {
          toast.success(response.message);
          setImgSrc(`data:image/webp;base64,${response.data}`)
        }
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="h-screen w-full flex flex-col items-center justify-between" id="dalle-form">
      <section className="w-full h-[85%] flex items-center justify-center mb-2">
        {isLoading && <Loader /> }
        {imgSrc && !isLoading && (
          <DynamicImageContainer src={imgSrc} />
        )}
      </section>

      <PromptInput onSubmit={handleSubmit} onReset={setImgSrc} imageSrc={imgSrc} isLoading={isLoading} />
    </section>
  );
}

export default DalleForm;
