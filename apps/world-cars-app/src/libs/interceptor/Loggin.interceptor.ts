import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	private readonly logger: Logger = new Logger();
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const recordTime = Date.now();
    const requestType = context.getType<GqlContextType>();

    if (requestType === 'graphql') {
        const gqlContext = GqlExecutionContext.create(context);
        const reqBody = gqlContext.getContext().req.body || {};
        this.logger.log(`${this.stringify(reqBody)}`, 'REQUEST');

        // Check the observable returned by next.handle()
        const observable = next.handle();
        if (observable === undefined) {
            this.logger.error('The observable returned by next.handle() is undefined');
        }

        return observable.pipe(
            tap((context) => {
                const responseTime = Date.now() - recordTime;
                this.logger.log(`${this.stringify(context)} - ${responseTime}ms \n\n`, 'RESPONSE');
            }),
        );
    } else {
        return next.handle(); // For other request types
    }
}
  stringify(reqBody: any) {
    throw new Error('Method not implemented.');
  }
}
