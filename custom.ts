
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100
//% color=#1e83e8
//% icon="\uf201"
//% block="Extra Math"
namespace more_math {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
    /**
     * TODO: Given an angle in degrees, converts the angle to radians (returns value)
     * @param degrees the angle, eg: 45
     */
    //% block="Degrees to Radians $degrees"
    export function degToRad(degrees: number): number {
        // Multiplies degrees by pi/180
        return degrees * (Math.PI / 180)
    }

    /**
     * TODO: Draws the velocity vector produced by a sprite
     * @param sprite the sprite to draw the velocity vector from, eg: mySprite
     */
    //% block
    export function drawVelVector(sprite: Sprite): void
    {
        game.onUpdate(function() {
            let bg = image.create(160, 120)
        })
    }
}
