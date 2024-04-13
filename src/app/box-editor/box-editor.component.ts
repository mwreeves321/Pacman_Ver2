import {
    EzComponent,
    BindStyleToNumberAppendPx,
    BindValueToNumber,
    BindStyle,
    BindValue,
    Change,
    ValueEvent,
    Input,
} from "@gsilber/webez";
import html from "./box-editor.component.html";
import css from "./box-editor.component.css";

export class BoxEditorComponent extends EzComponent {
    // @BindValueToNumber("padding-input")

    constructor() {
        super(html, css);
    }
    @BindStyleToNumberAppendPx("image", "padding")
    @BindValueToNumber("padding-input")
    private padding: number = 0;
    @Input("padding-input")
    onPaddingChange(event: ValueEvent) {
        this.padding = +event.value;
    }

    @BindStyleToNumberAppendPx("image", "margin")
    @BindValueToNumber("margin-input")
    private margin: number = 0;
    @Input("margin-input")
    onMarginChange(event: ValueEvent) {
        this.margin = +event.value;
    }
    @BindStyle("image", "backgroundColor")
    @BindValue("background-select")
    background: string = "red";

    @Change("background-select")
    onBackgroundChange(v: ValueEvent) {
        this.background = v.value;
    }
}
