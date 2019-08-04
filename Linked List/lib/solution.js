"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data) {
  var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  _classCallCheck(this, Node);

  this.data = data;
  this.next = next;
};

var LinkedList =
/*#__PURE__*/
function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this.size = 0;
  } //Insert first node


  _createClass(LinkedList, [{
    key: "insertAtBeginning",
    value: function insertAtBeginning(data) {
      this.head = new Node(data, this.head);
      this.size++;
    } //Insert last node

  }, {
    key: "insertAtEnd",
    value: function insertAtEnd(data) {
      var current = this.head;

      if (current === null) {
        this.head = new Node(data);
      } else {
        while (current) {
          if (current.next === null) {
            current.next = new Node(data);
            return;
          }

          current = current.next;
        }
      }

      this.size++;
    } //Insert at index

  }, {
    key: "insertAtIndex",
    value: function insertAtIndex(data, index) {
      if (index > this.size) {
        console.log("There is no such index");
        return;
      }

      if (index === 0) {
        this.head = new Node(data, this.head);
        this.size++;
        return;
      }

      var node = new Node(data);
      var current,
          previous,
          count = 0;
      current = this.head;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = node;
      node.next = current;
      this.size++;
    } //Get at index
    //Remove at index
    //Clear list
    //Print list data

  }, {
    key: "printList",
    value: function printList() {
      var current = this.head;

      while (current) {
        console.log(current.data);
        current = current.next;
      }
    } //Get list size

  }, {
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
  }]);

  return LinkedList;
}();

var ll = new LinkedList();
ll.insertAtEnd(100);
ll.insertAtEnd(200);
ll.insertAtEnd(300);
ll.insertAtBeginning(400);
ll.insertAtEnd(500);
ll.insertAtIndex(600, 2);
ll.insertAtBeginning(700);
ll.insertAtIndex(800, 1);
ll.insertAtEnd(900);
ll.printList();