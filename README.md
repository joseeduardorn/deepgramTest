# Ideas 
deepgram-live has a functional client side connection but needs to be add the keepalive message for a longer time, but is not secure access key is on the client side.

The best approch that I found is to have a node application to consume the live audio from VGI and send it to Deepgram using the node SDK. 

Need to install a new application with SSL to test the connection.
#challenge: 
  sending the data can be live or recording every 5 second and send it(no decided yet)
