const ITEM = 'kubejs:sheldon'
const SPEED = 2.5
const EXPLOSION = 10

ItemEvents.rightClicked(event => {
    if (event.item.id !== ITEM) return

    const player = event.player
    const level = player.level
    const look = player.lookAngle

    player.runCommandSilent(
        `playsound kubejs:sheldon_fire master @a[distance=..32] ${player.x} ${player.y} ${player.z} 1 1`
    )

    let rocket = level.createEntity('minecraft:fireball')

    rocket.x = player.x
    rocket.y = player.eyeY
    rocket.z = player.z

    rocket.mergeNbt({
        ExplosionPower: EXPLOSION,
        Motion: [
            look.x * SPEED,
            look.y * SPEED,
            look.z * SPEED
        ]
    })

    rocket.spawn()
    event.item.count--
})