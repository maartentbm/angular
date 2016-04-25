/**
 * This indirection is needed to free up Component, etc symbols in the public API
 * to be used by the decorator versions of these annotations.
 */
import { makeDecorator } from 'angular2/src/core/util/decorators';
import { CanActivate as CanActivateAnnotation } from './lifecycle_annotations_impl';
export { routerCanReuse, routerCanDeactivate, routerOnActivate, routerOnReuse, routerOnDeactivate } from './lifecycle_annotations_impl';
/**
 * Defines route lifecycle hook `CanActivate`, which is called by the router to determine
 * if a component can be instantiated as part of a navigation.
 *
 * <aside class="is-right">
 * Note that unlike other lifecycle hooks, this one uses an annotation rather than an interface.
 * This is because the `CanActivate` function is called before the component is instantiated.
 * </aside>
 *
 * The `CanActivate` hook is called with two {@link ComponentInstruction}s as parameters, the first
 * representing the current route being navigated to, and the second parameter representing the
 * previous route or `null`.
 *
 * ```typescript
 * @CanActivate((next, prev) => boolean | Promise<boolean>)
 * ```
 *
 * If `CanActivate` returns or resolves to `false`, the navigation is cancelled.
 * If `CanActivate` throws or rejects, the navigation is also cancelled.
 * If `CanActivate` returns or resolves to `true`, navigation continues, the component is
 * instantiated, and the {@link OnActivate} hook of that component is called if implemented.
 *
 * ### Example
 *
 * {@example router/ts/can_activate/can_activate_example.ts region='canActivate' }
 */
export var CanActivate = makeDecorator(CanActivateAnnotation);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlX2Fubm90YXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1aWG5ENWpsbS50bXAvYW5ndWxhcjIvc3JjL3JvdXRlci9saWZlY3ljbGUvbGlmZWN5Y2xlX2Fubm90YXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztPQUVJLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUNBQW1DO09BQ3hELEVBQUMsV0FBVyxJQUFJLHFCQUFxQixFQUFDLE1BQU0sOEJBQThCO0FBR2pGLFNBQ0UsY0FBYyxFQUNkLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLGtCQUFrQixRQUNiLDhCQUE4QixDQUFDO0FBRXRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJHO0FBQ0gsT0FBTyxJQUFJLFdBQVcsR0FFbEIsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaW5kaXJlY3Rpb24gaXMgbmVlZGVkIHRvIGZyZWUgdXAgQ29tcG9uZW50LCBldGMgc3ltYm9scyBpbiB0aGUgcHVibGljIEFQSVxuICogdG8gYmUgdXNlZCBieSB0aGUgZGVjb3JhdG9yIHZlcnNpb25zIG9mIHRoZXNlIGFubm90YXRpb25zLlxuICovXG5cbmltcG9ydCB7bWFrZURlY29yYXRvcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvdXRpbC9kZWNvcmF0b3JzJztcbmltcG9ydCB7Q2FuQWN0aXZhdGUgYXMgQ2FuQWN0aXZhdGVBbm5vdGF0aW9ufSBmcm9tICcuL2xpZmVjeWNsZV9hbm5vdGF0aW9uc19pbXBsJztcbmltcG9ydCB7Q29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJy4uL2luc3RydWN0aW9uJztcblxuZXhwb3J0IHtcbiAgcm91dGVyQ2FuUmV1c2UsXG4gIHJvdXRlckNhbkRlYWN0aXZhdGUsXG4gIHJvdXRlck9uQWN0aXZhdGUsXG4gIHJvdXRlck9uUmV1c2UsXG4gIHJvdXRlck9uRGVhY3RpdmF0ZVxufSBmcm9tICcuL2xpZmVjeWNsZV9hbm5vdGF0aW9uc19pbXBsJztcblxuLyoqXG4gKiBEZWZpbmVzIHJvdXRlIGxpZmVjeWNsZSBob29rIGBDYW5BY3RpdmF0ZWAsIHdoaWNoIGlzIGNhbGxlZCBieSB0aGUgcm91dGVyIHRvIGRldGVybWluZVxuICogaWYgYSBjb21wb25lbnQgY2FuIGJlIGluc3RhbnRpYXRlZCBhcyBwYXJ0IG9mIGEgbmF2aWdhdGlvbi5cbiAqXG4gKiA8YXNpZGUgY2xhc3M9XCJpcy1yaWdodFwiPlxuICogTm90ZSB0aGF0IHVubGlrZSBvdGhlciBsaWZlY3ljbGUgaG9va3MsIHRoaXMgb25lIHVzZXMgYW4gYW5ub3RhdGlvbiByYXRoZXIgdGhhbiBhbiBpbnRlcmZhY2UuXG4gKiBUaGlzIGlzIGJlY2F1c2UgdGhlIGBDYW5BY3RpdmF0ZWAgZnVuY3Rpb24gaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIGluc3RhbnRpYXRlZC5cbiAqIDwvYXNpZGU+XG4gKlxuICogVGhlIGBDYW5BY3RpdmF0ZWAgaG9vayBpcyBjYWxsZWQgd2l0aCB0d28ge0BsaW5rIENvbXBvbmVudEluc3RydWN0aW9ufXMgYXMgcGFyYW1ldGVycywgdGhlIGZpcnN0XG4gKiByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgcm91dGUgYmVpbmcgbmF2aWdhdGVkIHRvLCBhbmQgdGhlIHNlY29uZCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIHRoZVxuICogcHJldmlvdXMgcm91dGUgb3IgYG51bGxgLlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIEBDYW5BY3RpdmF0ZSgobmV4dCwgcHJldikgPT4gYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj4pXG4gKiBgYGBcbiAqXG4gKiBJZiBgQ2FuQWN0aXZhdGVgIHJldHVybnMgb3IgcmVzb2x2ZXMgdG8gYGZhbHNlYCwgdGhlIG5hdmlnYXRpb24gaXMgY2FuY2VsbGVkLlxuICogSWYgYENhbkFjdGl2YXRlYCB0aHJvd3Mgb3IgcmVqZWN0cywgdGhlIG5hdmlnYXRpb24gaXMgYWxzbyBjYW5jZWxsZWQuXG4gKiBJZiBgQ2FuQWN0aXZhdGVgIHJldHVybnMgb3IgcmVzb2x2ZXMgdG8gYHRydWVgLCBuYXZpZ2F0aW9uIGNvbnRpbnVlcywgdGhlIGNvbXBvbmVudCBpc1xuICogaW5zdGFudGlhdGVkLCBhbmQgdGhlIHtAbGluayBPbkFjdGl2YXRlfSBob29rIG9mIHRoYXQgY29tcG9uZW50IGlzIGNhbGxlZCBpZiBpbXBsZW1lbnRlZC5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIHtAZXhhbXBsZSByb3V0ZXIvdHMvY2FuX2FjdGl2YXRlL2Nhbl9hY3RpdmF0ZV9leGFtcGxlLnRzIHJlZ2lvbj0nY2FuQWN0aXZhdGUnIH1cbiAqL1xuZXhwb3J0IHZhciBDYW5BY3RpdmF0ZTogKGhvb2s6IChuZXh0OiBDb21wb25lbnRJbnN0cnVjdGlvbiwgcHJldjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2U8Ym9vbGVhbj58IGJvb2xlYW4pID0+IENsYXNzRGVjb3JhdG9yID1cbiAgICBtYWtlRGVjb3JhdG9yKENhbkFjdGl2YXRlQW5ub3RhdGlvbik7XG4iXX0=