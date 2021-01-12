/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A wrapper around a native element inside of a View.
 * @stable
 */
export class ElementRef<T extends HTMLElement = HTMLElement> {

  public nativeElement: T;

  constructor($element: JQuery) {
    $element['nativeElement'] = $element[0];
    return $element as ElementRef<T>;
  }
}

export interface ElementRef<T extends HTMLElement = HTMLElement> extends JQuery {
  nativeElement: T;
}
