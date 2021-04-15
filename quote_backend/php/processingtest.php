<html>
 <head>
  <title>Processing Test</title>
 </head>
 <body>
 <?php
    
        $url = 'http://blitz.cs.niu.edu/PurchaseOrder/';
        
        
        
        $data = array(
            'order' => '65', 
            'associate' => '2',
            'custid' => '4', 
            'amount' => '7654.32');
                
        $options = array(
            'http' => array(
                'header' => array('Content-type: application/json', 'Accept: application/json'),
                'method'  => 'POST',
                'content' => json_encode($data)
            )
        );
        
        $context  = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        echo $result;
    

    
 ?>