import { z, ZodSchema } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(2, { message: "name must be at least 2 characters" })
    .max(100, { message: "name must be less than 100 characters." }),
  company: z.string(),
  price: z.coerce
    .number()
    .int()
    .min(0, { message: "price must be a positive number." }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    { message: "description must be between 10 and 1000 words." }
  ),
  featured: z.coerce.boolean(),
});

export const imageSchema = z.object({
  image: validateImageFile(),
});

function validateImageFile() {
  const maxUploadsize = 1024 * 1024;
  const acceptedFileTypes = ["image/"];
  return z
    .instanceof(File)
    .refine(
      (file) => {
        return !file || file.size <= maxUploadsize;
      },
      { message: "File must be less than 1MB" }
    )
    .refine(
      (file) => {
        return (
          !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
        );
      },
      { message: "File must be an image" }
    );
}

export function validateWithZodSchema<T>(
  data: unknown,
  schema: ZodSchema<T>
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(", "));
  }
  return result.data;
}
