let mult = 1
const items = Array.from(Array(10000).keys())
tag App
	def render
		<self.container>
			<h1> "Hello Imba"
			for item, i in items 
				<button.item.imba data-testid="imba-{i}"  @click=mult++> item * mult
imba.mount <App>, document.getElementById "imba"