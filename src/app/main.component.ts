import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent, BindValue } from "@gsilber/webez";
import { BoopButtonComponent } from "./boop-button/boop-button.component";
import { SimpleCalculatorComponent } from "./simple-calculator/simple-calculator.component";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    @BindValue("example-target")
    private myText: string = "Hello from the TypeScript side!";
    private boopButton: BoopButtonComponent = new BoopButtonComponent();
    private calculator = new SimpleCalculatorComponent();
    constructor() {
        super(html, css);
        this.addComponent(this.boopButton, "boop-button");
        this.addComponent(this.calculator, "calculator");
    }
}
