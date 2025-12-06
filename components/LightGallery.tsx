"use client";

import * as React from "react";
import LightGallery from "lightgallery";
import type { LightGallerySettings } from "lightgallery/lg-settings";
import type {
  AfterSlideDetail,
  InitDetail,
  ContainerResizeDetail,
  AfterAppendSubHtmlDetail,
  BeforeOpenDetail,
  AfterOpenDetail,
  SlideItemLoadDetail,
  BeforeSlideDetail,
  PosterClickDetail,
  DragStartDetail,
  DragMoveDetail,
  DragEndDetail,
  BeforeNextSlideDetail,
  BeforePrevSlideDetail,
  BeforeCloseDetail,
  AfterCloseDetail,
  FlipHorizontalDetail,
  FlipVerticalDetail,
  RotateLeftDetail,
  RotateRightDetail,
} from "lightgallery/lg-events";

interface LgEvents {
  onAfterAppendSlide?: (detail: AfterSlideDetail) => void;
  onInit?: (detail: InitDetail) => void;
  onHasVideo?: (detail: InitDetail) => void;
  onContainerResize?: (detail: ContainerResizeDetail) => void;
  onAfterAppendSubHtml?: (detail: AfterAppendSubHtmlDetail) => void;
  onBeforeOpen?: (detail: BeforeOpenDetail) => void;
  onAfterOpen?: (detail: AfterOpenDetail) => void;
  onSlideItemLoad?: (detail: SlideItemLoadDetail) => void;
  onBeforeSlide?: (detail: BeforeSlideDetail) => void;
  onAfterSlide?: (detail: AfterSlideDetail) => void;
  onPosterClick?: (detail: PosterClickDetail) => void;
  onDragStart?: (detail: DragStartDetail) => void;
  onDragMove?: (detail: DragMoveDetail) => void;
  onDragEnd?: (detail: DragEndDetail) => void;
  onBeforeNextSlide?: (detail: BeforeNextSlideDetail) => void;
  onBeforePrevSlide?: (detail: BeforePrevSlideDetail) => void;
  onBeforeClose?: (detail: BeforeCloseDetail) => void;
  onAfterClose?: (detail: AfterCloseDetail) => void;
  onRotateLeft?: (detail: RotateLeftDetail) => void;
  onRotateRight?: (detail: RotateRightDetail) => void;
  onFlipHorizontal?: (detail: FlipHorizontalDetail) => void;
  onFlipVertical?: (detail: FlipVerticalDetail) => void;
}

export interface LightGalleryProps extends LgEvents, LightGallerySettings {
  children?: React.ReactNode;
  elementClassNames?: string;
}

const LgMethods = {
  onAfterAppendSlide: "lgAfterAppendSlide",
  onInit: "lgInit",
  onHasVideo: "lgHasVideo",
  onContainerResize: "lgContainerResize",
  onUpdateSlides: "lgUpdateSlides",
  onAfterAppendSubHtml: "lgAfterAppendSubHtml",
  onBeforeOpen: "lgBeforeOpen",
  onAfterOpen: "lgAfterOpen",
  onSlideItemLoad: "lgSlideItemLoad",
  onBeforeSlide: "lgBeforeSlide",
  onAfterSlide: "lgAfterSlide",
  onPosterClick: "lgPosterClick",
  onDragStart: "lgDragStart",
  onDragMove: "lgDragMove",
  onDragEnd: "lgDragEnd",
  onBeforeNextSlide: "lgBeforeNextSlide",
  onBeforePrevSlide: "lgBeforePrevSlide",
  onBeforeClose: "lgBeforeClose",
  onAfterClose: "lgAfterClose",
  onRotateLeft: "lgRotateLeft",
  onRotateRight: "lgRotateRight",
  onFlipHorizontal: "lgFlipHorizontal",
  onFlipVertical: "lgFlipVertical",
} as const;

const LG: React.FC<LightGalleryProps> = ({
  children,
  elementClassNames,
  onAfterAppendSlide,
  onInit,
  onHasVideo,
  onContainerResize,
  onAfterAppendSubHtml,
  onBeforeOpen,
  onAfterOpen,
  onSlideItemLoad,
  onBeforeSlide,
  onAfterSlide,
  onPosterClick,
  onDragStart,
  onDragMove,
  onDragEnd,
  onBeforeNextSlide,
  onBeforePrevSlide,
  onBeforeClose,
  onAfterClose,
  onRotateLeft,
  onRotateRight,
  onFlipHorizontal,
  onFlipVertical,
  ...restProps
}: LightGalleryProps) => {
  const $lg = React.useRef<HTMLDivElement>(null);

  const registerEvents = React.useCallback(() => {
    const el = $lg.current;
    if (!el) return;
    if (onAfterAppendSlide) el.addEventListener(LgMethods.onAfterAppendSlide, ((e: CustomEvent) => onAfterAppendSlide(e.detail)) as EventListener);
    if (onInit) el.addEventListener(LgMethods.onInit, ((e: CustomEvent) => onInit(e.detail)) as EventListener);
    if (onHasVideo) el.addEventListener(LgMethods.onHasVideo, ((e: CustomEvent) => onHasVideo(e.detail)) as EventListener);
    if (onContainerResize) el.addEventListener(LgMethods.onContainerResize, ((e: CustomEvent) => onContainerResize(e.detail)) as EventListener);
    if (onAfterAppendSubHtml) el.addEventListener(LgMethods.onAfterAppendSubHtml, ((e: CustomEvent) => onAfterAppendSubHtml(e.detail)) as EventListener);
    if (onBeforeOpen) el.addEventListener(LgMethods.onBeforeOpen, ((e: CustomEvent) => onBeforeOpen(e.detail)) as EventListener);
    if (onAfterOpen) el.addEventListener(LgMethods.onAfterOpen, ((e: CustomEvent) => onAfterOpen(e.detail)) as EventListener);
    if (onSlideItemLoad) el.addEventListener(LgMethods.onSlideItemLoad, ((e: CustomEvent) => onSlideItemLoad(e.detail)) as EventListener);
    if (onBeforeSlide) el.addEventListener(LgMethods.onBeforeSlide, ((e: CustomEvent) => onBeforeSlide(e.detail)) as EventListener);
    if (onAfterSlide) el.addEventListener(LgMethods.onAfterSlide, ((e: CustomEvent) => onAfterSlide(e.detail)) as EventListener);
    if (onPosterClick) el.addEventListener(LgMethods.onPosterClick, ((e: CustomEvent) => onPosterClick(e.detail)) as EventListener);
    if (onDragStart) el.addEventListener(LgMethods.onDragStart, ((e: CustomEvent) => onDragStart(e.detail)) as EventListener);
    if (onDragMove) el.addEventListener(LgMethods.onDragMove, ((e: CustomEvent) => onDragMove(e.detail)) as EventListener);
    if (onDragEnd) el.addEventListener(LgMethods.onDragEnd, ((e: CustomEvent) => onDragEnd(e.detail)) as EventListener);
    if (onBeforeNextSlide) el.addEventListener(LgMethods.onBeforeNextSlide, ((e: CustomEvent) => onBeforeNextSlide(e.detail)) as EventListener);
    if (onBeforePrevSlide) el.addEventListener(LgMethods.onBeforePrevSlide, ((e: CustomEvent) => onBeforePrevSlide(e.detail)) as EventListener);
    if (onBeforeClose) el.addEventListener(LgMethods.onBeforeClose, ((e: CustomEvent) => onBeforeClose(e.detail)) as EventListener);
    if (onAfterClose) el.addEventListener(LgMethods.onAfterClose, ((e: CustomEvent) => onAfterClose(e.detail)) as EventListener);
    if (onRotateLeft) el.addEventListener(LgMethods.onRotateLeft, ((e: CustomEvent) => onRotateLeft(e.detail)) as EventListener);
    if (onRotateRight) el.addEventListener(LgMethods.onRotateRight, ((e: CustomEvent) => onRotateRight(e.detail)) as EventListener);
    if (onFlipHorizontal) el.addEventListener(LgMethods.onFlipHorizontal, ((e: CustomEvent) => onFlipHorizontal(e.detail)) as EventListener);
    if (onFlipVertical) el.addEventListener(LgMethods.onFlipVertical, ((e: CustomEvent) => onFlipVertical(e.detail)) as EventListener);
  }, [
    onAfterAppendSlide,
    onInit,
    onHasVideo,
    onContainerResize,
    onAfterAppendSubHtml,
    onBeforeOpen,
    onAfterOpen,
    onSlideItemLoad,
    onBeforeSlide,
    onAfterSlide,
    onPosterClick,
    onDragStart,
    onDragMove,
    onDragEnd,
    onBeforeNextSlide,
    onBeforePrevSlide,
    onBeforeClose,
    onAfterClose,
    onRotateLeft,
    onRotateRight,
    onFlipHorizontal,
    onFlipVertical,
  ]);

  React.useEffect(() => {
    registerEvents();
    const instance = LightGallery(($lg.current as unknown) as HTMLElement, restProps);
    return () => {
      instance.destroy();
    };
  }, [registerEvents, restProps]);

  return (
    <div className={elementClassNames ? `lg-react-element ${elementClassNames}` : "lg-react-element"} ref={$lg}>
      {children}
    </div>
  );
};

export default LG;
