<template>
    <div class="vue-am-ripple">
    </div>
</template>

<script>
    export default {
        props: {
            isProduction: {
                type: Boolean,
                default: true
            }
        },
        mounted() {
            this.$parent.$el.addEventListener('touchstart', this.handleTouchStart)
        },
        beforeDestroy() {
            this.$parent.$el.removeEventListener('touchstart', this.handleTouchStart)
        },
        methods: {
            handleTouchStart($event) {
                if (this.isProduction) {
                    let Item = this.$parent.$el;
                    let RippleWidth = Math.max(Item.offsetHeight, Item.offsetWidth);
                    const ClientRect = Item.getBoundingClientRect();
                    let pointX = $event.changedTouches[0].clientX - ClientRect.left - Item.offsetWidth / 2;
                    let pointY = $event.changedTouches[0].clientY - ClientRect.top - Item.offsetWidth / 2;

                    const ripple = document.createElement('div');
                    ripple.style.width = `${RippleWidth}px`;
                    ripple.style.height = `${RippleWidth}px`;
                    ripple.style.left = `${pointX}px`;
                    ripple.style.top = `${pointY}px`;
                    ripple.className = 'vue-am-ripple-el';
                    this.$el.appendChild(ripple);

                    setTimeout(() => {
                        this.$el.removeChild(ripple)
                    }, 1000)
                }
            }
        }
    }
</script>
