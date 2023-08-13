import { NextRequest as OriginalNextRequest } from 'next/server'
import { langPath } from '@/types/custom';

declare global {
    declare interface NextRequest extends OriginalNextRequest {
      langPath: langPath; // custom add
    }
}
