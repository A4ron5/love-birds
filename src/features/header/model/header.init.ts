import { triggerBurger, $isBurgerOpen } from "./header.model";

$isBurgerOpen.on(triggerBurger, (open, _) => !open);
