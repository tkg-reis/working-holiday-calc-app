"use client";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import type { formValidation } from "../formValidation/FormValidationSchema";
import { formValidationSchema } from "../formValidation/FormValidationSchema";

export default function Layout({ children }: { children: React.ReactNode }) {
  // 大元はuseFormで子コンポーネントが単一の場合に使用する
  // https://qiita.com/yoshinyan/items/e2252305b9fb83e7cac2
  const methods = useForm<formValidation>({
    mode: "onChange",
    resolver : zodResolver(formValidationSchema)
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}
