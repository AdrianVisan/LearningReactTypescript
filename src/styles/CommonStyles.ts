import SxBuilder from './SxBuilder';

export const justifyItems = SxBuilder.newBuilder()
  .setJustifyItems('center')
  .build();

export const boldText = SxBuilder.newBuilder().setFontWeight('bold').build();
