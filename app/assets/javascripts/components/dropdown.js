document.addEventListener('DOMContentLoaded', () => {
	const toggleDropdown = () => {
		$('#gear-dropdown').toggleClass('hidden');
	};
	$(() => $('#gear-dropdown-btn').on('click', toggleDropdown));
});
