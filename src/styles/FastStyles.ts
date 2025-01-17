import * as CSS from 'csstype';
import SxBuilder from './SxBuilder';

export function getFontSizeStyle(
  fontSize: CSS.Property.FontSize<string | number>
) {
  return SxBuilder.start().setFontSize(fontSize).build();
}
