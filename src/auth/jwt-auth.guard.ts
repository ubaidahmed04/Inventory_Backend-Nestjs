import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from 'src/public.decorator';

// jwt-auth.guard.ts
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(private reflector: Reflector) {
        super();
    }

    canActivate(context: ExecutionContext) {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),   // method-level check (@Public() route pe)
            context.getClass(),     // class-level check (@Public() controller pe)
        ]);
        
        if (isPublic) return true;   // agar public hai, guard verification skip
        return super.canActivate(context);  // warna normal JWT verify hoga
    }
}