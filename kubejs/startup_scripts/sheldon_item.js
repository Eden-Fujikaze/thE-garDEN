StartupEvents.registry('item', event => {
    event.create('sheldon')
        .displayName('Sheldon Lee Cooper')
        .maxStackSize(1)
        .maxDamage(1)
        .tooltip('§lBazinga!')
    event.create('incomplete_sheldon').unstackable()
})