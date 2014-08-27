$(document).ready(function() {
  
  // Tooltips
  // - on desktops
  $('.feature').hover(
    function() {
      showTooltip($(this));
    }, function() {
      hideTooltip($(this));
    }
  );
  
  // - on touch
  $('.feature').click(function() {
    var tooltip = item.next('.feature-description').length ? item.next('.feature-description') : item.children('.feature-description');
    tooltip.toggleClass('active');
  });
  
  // - close
  $('.feature-description .close').click(function() {
    $(this).parent().removeClass('active');
  });
  
  
  function showTooltip(item) {
    var tooltip = item.next('.feature-description').length ? item.next('.feature-description') : item.children('.feature-description');
    tooltip.addClass('active');
  }
  
  function hideTooltip(item) {
    var tooltip = item.next('.feature-description').length ? item.next('.feature-description') : item.children('.feature-description');
    tooltip.removeClass('active');
  }
});

