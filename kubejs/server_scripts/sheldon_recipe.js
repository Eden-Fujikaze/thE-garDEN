ServerEvents.recipes(event => {
    const transitional = 'kubejs:incomplete_sheldon'
    event.recipes.create.sequenced_assembly(
        'kubejs:sheldon',
        'advanced_ae:quantum_core',
        
        [ // Sequence
        event.recipes.create.deploying(transitional, [transitional, 'avaritia:infinity']),
        event.recipes.create.deploying(transitional, [transitional, 'addictives:meth']),
        event.recipes.create.filling(transitional, [transitional, Fluid.of('mekanism:nutritional_paste', 1000)]),
        event.recipes.create.deploying(transitional, [transitional, 'addictives:fentanyl_block']),
        event.recipes.create.filling(transitional, [transitional, Fluid.of('creatorsword:ominous_essence_v', 100)]),
        event.recipes.create.deploying(transitional, [transitional, 'projectexpansion:compact_sun'])
        ]
    )
    .transitionalItem(transitional)
    .loops(32)
})