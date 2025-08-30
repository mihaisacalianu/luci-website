import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateMastic(width:string,
  depth:string,
  length:string){
  const sealantVolume =
  parseFloat(width)
  * parseFloat(depth)
  * parseFloat(length)
  * 1.0;

  return sealantVolume;
}
