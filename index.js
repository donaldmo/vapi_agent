import axios from 'axios';

// Handle POST request to '/outbound'
app.post('/outbound', async (req: Request, res: Response) => {
  // Extract data from the request body
  const { phoneNumberId, assistantId, customerNumber } = req.body;

  try {
    // Make a POST request to the Vapi API
    const response = await axios.post(
      'https://api.vapi.ai/call/phone',
      {
        phoneNumberId,
        assistantId,
        customer: { number: customerNumber },
      },
      {
        headers: {
          Authorization: `Bearer YOUR_API_KEY`,
        },
      }
    );
    // Send the response data as JSON
    res.status(200).json(response.data);
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: 'Failed to place outbound call', error: error.message });
  }
});
