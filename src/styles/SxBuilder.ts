import * as CSS from 'csstype';
import { SxProps, Theme } from '@mui/material';

class SxBuilder {
  private sxProps: SxProps<Theme> = {};

  private constructor() {}

  public setJustifyItems(justifyItems: CSS.Property.JustifyItems): SxBuilder {
    this.sxProps = { ...this.sxProps, justifyItems };
    return this;
  }

  public setFontWeight(fontWeight: CSS.Property.FontWeight): SxBuilder;
  public setFontWeight(fontWeight: string): SxBuilder;
  public setFontWeight(
    fontWeight: CSS.Property.FontWeight | string
  ): SxBuilder {
    this.sxProps = { ...this.sxProps, fontWeight };
    return this;
  }

  public setFontSize(
    fontSize: CSS.Property.FontSize<string | number>
  ): SxBuilder {
    this.sxProps = { ...this.sxProps, fontSize };
    return this;
  }

  public build(): SxProps<Theme> {
    return this.sxProps;
  }

  public static newBuilder(): SxBuilder {
    return new SxBuilder();
  }
}

export default SxBuilder;
