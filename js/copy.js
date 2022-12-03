var textToCopy = document.getElementById('text-to-copy');
var string = textToCopy.innerHTML;
var tooltip = document.getElementById('tooltip');

function CopyText() {
    navigator.clipboard.writeText(string);
    // alert("Copied");
    tooltip.animate([
        {color: 'transparent'},
        {color: 'var(--primary-color)',
    backgroundColor: 'var(--light-color)' },
    {color: 'var(--primary-color)',
    backgroundColor: 'var(--light-color)' },
        {color: 'transparent'}
      ], {
        duration: 500,
      });
    }