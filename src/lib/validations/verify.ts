import { z } from "zod";

export const OTP_LENGTH = 6;

export const otpSchema = z.string().regex(/^\d{6}$/, "Mã OTP gồm đúng 6 chữ số");