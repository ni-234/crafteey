// JavaScript Document

window.addEventListener('load', () => {
  // Simulate tracking data
  const trackingData = [
    { location: 'New York', status: 'In transit' },
    { location: 'Chicago', status: 'Delivered' },
    { location: 'Los Angeles', status: 'Out for delivery' }
  ];
  
  let index = 0;
  
  function updateTrackingInfo() {
    const locationElement = document.getElementById('location');
    const statusElement = document.getElementById('status');
    
    if (index < trackingData.length) {
      const data = trackingData[index];
      locationElement.textContent = `Location: ${data.location}`;
      statusElement.textContent = `Status: ${data.status}`;
      index++;
    } else {
      locationElement.textContent = 'Tracking complete';
      statusElement.textContent = '';
    }
  }
  
  updateTrackingInfo();
  setInterval(updateTrackingInfo, 3000); // Update every 3 seconds
});