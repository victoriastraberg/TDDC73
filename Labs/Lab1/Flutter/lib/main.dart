import 'package:flutter/material.dart'; //This is what gives our application the Material Design
                                        // look and subsequent access to Material style widgets and functionality.
void main() => runApp(const MyApp());

// Stateless Widget makes the app itself a widget (widget does not do anything/change)
class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);  // Key is a type used in Flutter to identify widgets and allows Flutter to know when a widget that's moved in the tree
                                              // is the same as a widget that was previously in a different location.

  @override                                 // @override just points out that the function is also defined in an ancestor class,
  Widget build(BuildContext context) {      // but is being redefined to do something else in the current class.
    return MaterialApp(
      home: Scaffold(                       // Scaffold = from the Material library, provides a default app bar,
          appBar: AppBar(                   // and a body property that holds the widget tree for the home screen.
            title: const Text('Lab 1 - Flutter'),
            centerTitle: true,
          ),
          // COLUMN
          body: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              // ROW 1 - Image
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Align(
                    child:
                    Image.asset
              ('assets/images/flutter.jpg'),
                  ),
                ],
              ),
              // ROW 2
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  TextButton(
                    style: TextButton.styleFrom(
                      padding: const EdgeInsets.all(16),
                      primary: Colors.black,
                      backgroundColor: Colors.grey,
                      textStyle: const TextStyle(fontSize: 20),
                    ),
                    onPressed: () {},
                    child: const Text('BUTTON'),
                  ),
                  TextButton(
                    style: TextButton.styleFrom(
                      padding: const EdgeInsets.all(16),
                      primary: Colors.black,
                      backgroundColor: Colors.grey,
                      textStyle: const TextStyle(fontSize: 20),
                    ),
                    onPressed: () {},
                    child: const Text('BUTTON'),
                  ),
                ],
              ),
              // ROW 3
              Row(mainAxisAlignment: MainAxisAlignment.spaceAround, children: [
                TextButton(
                  style: TextButton.styleFrom(
                    padding: const EdgeInsets.all(16),
                    primary: Colors.black,
                    backgroundColor: Colors.grey,
                    textStyle: const TextStyle(fontSize: 20),
                  ),
                  onPressed: () {},
                  child: const Text('BUTTON'),
                ),
                TextButton(
                  style: TextButton.styleFrom(
                    padding: const EdgeInsets.all(16),
                    primary: Colors.black,
                    backgroundColor: Colors.grey,
                    textStyle: const TextStyle(fontSize: 20),
                  ),
                  onPressed: () {},
                  child: const Text('BUTTON'),
                ),
              ]),
              // ROW 4
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: const <Widget>[
                  Text('Email:'),
                  Flexible(
                    child: TextField(),
                  ),
                ],
              )
            ],
          )),
    );
  }
}
