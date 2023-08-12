import { langPath } from '@/types/custom';
import { NextRequest as OriginalNextRequest } from 'next/server'

declare global {
    declare interface NextRequest extends OriginalNextRequest {
      langPath?: langPath; // custom add
    }
}

