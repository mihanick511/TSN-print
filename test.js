window.onload = function()
{
	generalObject.init()
}
const generalObject = 
{
	init()
	{

	}
}
generalObject.accordeon1 = 
{
	list: document.querySelector('._header__list'),
	header: document.querySelector('._header'),
	show(instance)
	{
		if(instance.classList.contains('active'))
		{
			instance.classList.remove('active')
			this.list.classList.remove('active')
			this.header.style.marginBottom = '0';
		}
		else
		{
			instance.classList.add('active')
			this.list.classList.add('active')
			this.header.style.marginBottom = '290px';
		}
	}
}