<div class="gradient overflow-hidden {$$props.class ?? ''}"><slot /></div>

<style>
	.gradient {
		position: relative;
		display: flex;
		width: 100%;
		contain: layout paint;
	}
	.gradient > * {
		z-index: 2;
	}
	.gradient::before {
		position: absolute;
		left: 0;
		top: 0;
		content: '';
		width: calc(100% * 4);
		height: calc(100% * 4);
		background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
		background-repeat: no-repeat;
		transform-origin: top left;
		animation: gradient-move 60s ease infinite;
	}

	@keyframes gradient-move {
		0% {
			transform: translate(0%, 0%);
		}
		50% {
			transform: translate(-50%, -50%);
		}
		100% {
			transform: translate(0%, 0%);
		}
	}
</style>
