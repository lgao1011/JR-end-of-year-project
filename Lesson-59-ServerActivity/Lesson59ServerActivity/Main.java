import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.sql.*;

import java.net.InetSocketAddress;
import java.util.Map;

//For compiling on the shell on repl: Same on mac
//javac -cp sqlite-jdbc-3.23.1.jar: Main.java
//java -cp sqlite-jdbc-3.23.1.jar: Main

//Use for windows
//javac -cp sqlite-jdbc-3.23.1.jar; Main.java
class Main {

 public static void main(String[] args)throws IOException{
    (new Main()).init();
  }


  void print(Object o){ System.out.println(o);}
  void printt(Object o){ System.out.print(o);}

  void init() throws IOException{
   

    // create a port - our Gateway
    int port = 8300;
      
    //create the HTTPserver object
    HttpServer server = HttpServer.create(new InetSocketAddress(port),0);

    // create the database object
    Database db = new Database("jdbc:sqlite:flightdata.db");
    
    
  
    server.createContext("/", new RouteHandler("You are connected, but route not given or incorrect....") );

    // Add your routes here....
	//flights
    String flights = "";

	flights = " select * from flights ";
	flights += " inner join airlines on flights.airlineID = airlines.airlineID ";
    
    server.createContext("/flights", new RouteHandler(db,flights) );
	
	//airlines
	String airlines = "";
	
	airlines = " select * from airlines ";

	server.createContext("/airlines", new RouteHandler(db,airlines) );

	//airports
	String airports = "";
	
	airports = " select * from airports ";

	server.createContext("/airports", new RouteHandler(db,airports) );

	//aircrafts
	String aircrafts = "";
	
	aircrafts = " select * from aircrafts ";

	server.createContext("/aircrafts", new RouteHandler(db,aircrafts) );

   
     
      
    //Start the server
    server.start();

    System.out.println("Server is listening on port "+port);
       
      
    }    
}


