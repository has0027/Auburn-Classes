import java.util.Iterator;
import java.util.NoSuchElementException;

/**
 * Provides an implementation of the Set interface.
 * A doubly-linked list is used as the underlying data structure.
 * Although not required by the interface, this linked list is
 * maintained in ascending natural order. In those methods that
 * take a LinkedSet as a parameter, this order is used to increase
 * efficiency.
 *
 * @author Haden Stuart (has0027@auburn.edu)
 * @version 10/16/18
 *
 */
public class LinkedSet<T extends Comparable<? super T>> implements Set<T> {

   //////////////////////////////////////////////////////////
   // Do not change the following three fields in any way. //
   //////////////////////////////////////////////////////////

   /** References to the first and last node of the list. */
   Node front;
   Node rear;

   /** The number of nodes in the list. */
   int size;

   /////////////////////////////////////////////////////////
   // Do not change the following constructor in any way. //
   /////////////////////////////////////////////////////////

   /**
    * Instantiates an empty LinkedSet.
    */
   public LinkedSet() {
      front = null;
      rear = null;
      size = 0;
   }


   //////////////////////////////////////////////////
   // Public interface and class-specific methods. //
   //////////////////////////////////////////////////

   ///////////////////////////////////////
   // DO NOT CHANGE THE TOSTRING METHOD //
   ///////////////////////////////////////
   /**
    * Return a string representation of this LinkedSet.
    *
    * @return a string representation of this LinkedSet
    */
   @Override
   public String toString() {
      if (isEmpty()) {
         return "[]";
      }
      StringBuilder result = new StringBuilder();
      result.append("[");
      for (T element : this) {
         result.append(element + ", ");
      }
      result.delete(result.length() - 2, result.length());
      result.append("]");
      return result.toString();
   }


   ///////////////////////////////////
   // DO NOT CHANGE THE SIZE METHOD //
   ///////////////////////////////////
   /**
    * Returns the current size of this collection.
    *
    * @return  the number of elements in this collection.
    */
   public int size() {
      return size;
   }

   //////////////////////////////////////
   // DO NOT CHANGE THE ISEMPTY METHOD //
   //////////////////////////////////////
   /**
    * Tests to see if this collection is empty.
    *
    * @return  true if this collection contains no elements, false otherwise.
    */
   public boolean isEmpty() {
      return (size == 0);
   }


   /**
    * Ensures the collection contains the specified element. Neither duplicate
    * nor null values are allowed. This method ensures that the elements in the
    * linked list are maintained in ascending natural order.
    *
    * @param  element  The element whose presence is to be ensured.
    * @return true if collection is changed, false otherwise.
    */
   public boolean add(T element) {
   
      if (element == null) {
         return false;
      }
      
      if (contains(element)) {
         return false;
      }
      
      Node n = new Node(element);
      
      // If first
      if (isEmpty()) {
         front = n;
         rear = n;
         size++;
         return true;
      }
      
      // Compare all other elements
      Node temp = front;
      
      while (temp != null) {
      
         // If element is lower than front
         if (element.compareTo(temp.element) < 0 && temp == front) {
            n.next = temp;
            front = n;
            temp.prev = n;
            size++;
            break;
         }
         
         // If element is greater than rear
         else if (element.compareTo(temp.element) > 0 && temp == rear) {
            n.prev = temp;
            rear = n;
            temp.next = n;
            size++;
            break;
         }
         
         // If element is in the middle
         else {
         
         // Move out
            if (element.compareTo(temp.element) < 0 && element.compareTo(temp.prev.element) > 0) {
               n.next = temp;
               n.prev = temp.prev;
               temp.prev = n;
               temp.prev.prev.next = n;
               size++;
               break;
            }
         
         // Move in
            if (element.compareTo(temp.element) > 0 && element.compareTo(temp.next.element) < 0) {
               n.prev = temp;
               n.next = temp.next;
               temp.next = n;
               temp.next.next.prev = n;
               size++;
               break;
            }
         }
        
         // If in place
         temp = temp.next; 
      }
   
      return true;
   }

   /**
    * Ensures the collection does not contain the specified element.
    * If the specified element is present, this method removes it
    * from the collection. This method, consistent with add, ensures
    * that the elements in the linked lists are maintained in ascending
    * natural order.
    *
    * @param   element  The element to be removed.
    * @return  true if collection is changed, false otherwise.
    */
   public boolean remove(T element) {
   
      if (element == null) {
         return false;
      }
      
      else if (isEmpty()) {
         return false;
      }
      
      else if (!contains(element)) {
         return false;
      }
      
      Node n = front;
      
      while (n != null) {
      
         if (element.compareTo(n.element) == 0) {
         
            // If only element
            if (size == 1) {
               Node temp = new Node();
               front = temp;
               rear = temp;
               size--;
               break;
            }
            
            // If found at front
            else if (n == front) {
               front = front.next;
               front.prev = null;
               size--;
               break;
            }
            
            // If found at rear
            else if (n == rear) {
               rear = rear.prev;
               rear.next = null;
               size--;
               break;
            }
            
            // If found in middle
            else {
               n.prev.next = n.next;
               n.next.prev = n.prev;
               size--;
               break;
            }
         }
         
         n = n.next;
      }
     
      return true;
   }


   /**
    * Searches for specified element in this collection.
    *
    * @param   element  The element whose presence in this collection is to be tested.
    * @return  true if this collection contains the specified element, false otherwise.
    */
   public boolean contains(T element) {
   
      if (element == null || isEmpty()) {
         return false;
      }
      
      boolean result = false;
      Node n = front;
      
      while (n != null && !result) {
      
         if (n.element.equals(element)) {
            result = true;
         }
         n = n.next;
      }
      
      return result;
   }


   /**
    * Tests for equality between this set and the parameter set.
    * Returns true if this set contains exactly the same elements
    * as the parameter set, regardless of order.
    *
    * @return  true if this set contains exactly the same elements as
    *               the parameter set, false otherwise
    */
   public boolean equals(Set<T> s) {
   
      if (s == null) {
         return false;
      }
      
      // Compare each element
      for (T temp : this) {
         if (!s.contains(temp)) {
            return false;
         }
      }
      
      // Compare each element
      for (T temp : s) {
         if (!contains(temp)) {
            return false;
         }
      }
      
      return true;
   }


   /**
    * Tests for equality between this set and the parameter set.
    * Returns true if this set contains exactly the same elements
    * as the parameter set, regardless of order.
    *
    * @return  true if this set contains exactly the same elements as
    *               the parameter set, false otherwise
    */
   public boolean equals(LinkedSet<T> s) {
   
      if (s == null) {
         return false;
      }
      
      Node fFront = front;
      Node sFront = s.front;
      
      while (fFront != null) {
      
         // Compare each element
         if (fFront.element.compareTo(sFront.element) != 0) {
            return false;
         }
         
         fFront = fFront.next;
         sFront = sFront.next;
      }
      
      return true;
   }


   /**
    * Returns a set that is the union of this set and the parameter set.
    *
    * @return  a set that contains all the elements of this set and the parameter set
    */
   public Set<T> union(Set<T> s) {
   
      if (s == null || s.isEmpty()) {
         return this;
      }
      
      if (isEmpty()) {
         return s;
      }
      
      LinkedSet<T> union = new LinkedSet<T>();
      
      for (T temp : this) {
         union.add(temp);
      }
      
      for (T temp : s) {
         union.add(temp);
      }
      
      return union;
   }


   /**
    * Returns a set that is the union of this set and the parameter set.
    *
    * @return  a set that contains all the elements of this set and the parameter set
    */
   public Set<T> union(LinkedSet<T> s) {
   
      if (s == null || s.isEmpty()) {
         return this;
      }
      
      if (isEmpty()) {
         return s;
      }
      
      LinkedSet<T> union = new LinkedSet<T>(); 
      
      Node sFront = s.front;
      Node firstTemp = new Node(sFront.element);
      union.front = firstTemp;
      union.rear = firstTemp;
      union.size++;
      sFront = sFront.next;
      
      Node uFront = union.front;
      
      while (sFront != null) {
         Node temp = new Node(sFront.element);
      
         if (sFront == s.rear) {
            union.rear.next = temp;
            temp.prev = union.rear;
            union.rear = temp;
            union.size++;
            break;
         }
         
         else {
            temp.prev = uFront;
            uFront.next = temp;
            union.rear = temp;
            union.size++;
            sFront = sFront.next;
            uFront = uFront.next;
         }
      }
      
      Node fFront = front;
      Node nFront = union.front;
      
      while (fFront != null && nFront != null) {
      
         if (fFront.element.compareTo(nFront.element) < 0 && nFront == union.front) {
            Node temp = new Node(fFront.element);
            temp.next = nFront;
            union.front = temp;
            nFront.prev = temp;
            fFront = fFront.next;
            union.size++;
         } 
         
         if (fFront.element.compareTo(nFront.element) > 0 && nFront == union.rear) {
            Node temp = new Node(fFront.element);
            temp.next = nFront;
            union.rear = temp;
            nFront.prev = temp;
            fFront = fFront.next;
            union.size++;
         } 
         
         else if (fFront.element.compareTo(nFront.element) < 0 && fFront.element.compareTo(nFront.prev.element) > 0) {
            Node temp = new Node(fFront.element);
            temp.next = nFront;
            temp.prev = nFront.prev;
            nFront.prev.next = temp;
            nFront.prev = temp;
            fFront = fFront.next;
            union.size++;
         }
         
         else if (fFront.element.compareTo(nFront.element) == 0) {
            fFront = fFront.next;
         }
         
         else {
            nFront = nFront.next;
         }
      }
      
      
      return union;
   }


   /**
    * Returns a set that is the intersection of this set and the parameter set.
    *
    * @return  a set that contains elements that are in both this set and the parameter set
    */
   public Set<T> intersection(Set<T> s) {
   
      if (s == null || s.isEmpty()) {
         return s;
      }
   
      if (isEmpty()) {
         return this;
      }
      
      LinkedSet<T> intersection = new LinkedSet<T>();
      
      for (T temp : s) {
      
         if (contains(temp)) {
            intersection.add(temp);
         }
      } 
   
      return intersection;
   }

   /**
    * Returns a set that is the intersection of this set and
    * the parameter set.
    *
    * @return  a set that contains elements that are in both
    *            this set and the parameter set
    */
   public Set<T> intersection(LinkedSet<T> s) {
   
      if (s == null || s.isEmpty()) {
         return s;
      }
   
      if (isEmpty()) {
         return this;
      }
      
      LinkedSet<T> intersection = new LinkedSet<T>();
      
      Node fFront = front;
      Node iFront = intersection.front;
      Node sFront = s.front;
      
      while (fFront != null && sFront != null) {
      
         if (fFront.element.compareTo(sFront.element) < 0) {
            fFront = fFront.next;
         }
         
         else if (fFront.element.compareTo(sFront.element) > 0) {
            sFront = sFront.next;
         }
         
         else if (fFront.element.compareTo(sFront.element) == 0) {
            Node temp = new Node(fFront.element);
         
         // If first
            if (intersection.isEmpty()) {
               intersection.front = temp;
               intersection.rear = temp;
               iFront = temp;
            }
            
            // If somewhere else
            else {
               temp.prev = iFront;
               iFront.next = temp;
               intersection.rear = temp;
               iFront = temp;
            }
          
            fFront = fFront.next;
            sFront = sFront.next;
            intersection.size++;
         }
         
      } 
   
      return intersection;
   }


   /**
    * Returns a set that is the complement of this set and the parameter set.
    *
    * @return  a set that contains elements that are in this set but not the parameter set
    */
   public Set<T> complement(Set<T> s) {
   
      if (s == null || s.isEmpty()) {
         return this;
      }
   
      if (isEmpty()) {
         return this;
      }
      
      LinkedSet<T> complement = new LinkedSet<T>();
      
      for (T temp : this) {
      
         if (s.contains(temp)) {
            complement.add(temp);
         }
      }
      
      return complement;
   }


   /**
    * Returns a set that is the complement of this set and
    * the parameter set.
    *
    * @return  a set that contains elements that are in this
    *            set but not the parameter set
    */
   public Set<T> complement(LinkedSet<T> s) {
   
      if (s == null || s.isEmpty()) {
         return this;
      }
   
      if (isEmpty()) {
         return this;
      }
      
      LinkedSet<T> complement = new LinkedSet<T>();
      
      Node fFront = front;
      Node cFront = complement.front;
      Node sFront = s.front;
      
      while (fFront != null && sFront != null) {
      
         if (fFront.element.compareTo(sFront.element) != 0) {
            Node temp = new Node(fFront.element);
         
            // If first
            if (complement.isEmpty()) {
               complement.front = temp;
               complement.rear = temp;
               cFront = temp;
            }
            
            // If somewhere else
            else {
               temp.prev = cFront;
               cFront.next = temp;
               complement.rear = temp;
               cFront = temp;
            }
            
            fFront = fFront.next;
            complement.size++;
         }
         
         else if (fFront.element.compareTo(sFront.element) == 0) {
            fFront = fFront.next;
            sFront = sFront.next;
         }
         
      }
         
      return complement;
   }


   /**
    * Returns an iterator over the elements in this LinkedSet.
    * Elements are returned in ascending natural order.
    *
    * @return  an iterator over the elements in this LinkedSet
    */
   public Iterator<T> iterator() {
   
      Iterator<T> sorted = new LinkedIterator(front, rear, size);
      return sorted;
   }


   /**
    * Returns an iterator over the elements in this LinkedSet.
    * Elements are returned in descending natural order.
    *
    * @return  an iterator over the elements in this LinkedSet
    */
   public Iterator<T> descendingIterator() {
   
      Iterator<T> reverseSorted = new ReverseLinkedIterator(front, rear, size);
      return reverseSorted;
   }


   /**
    * Returns an iterator over the members of the power set
    * of this LinkedSet. No specific order can be assumed.
    *
    * @return  an iterator over members of the power set
    */
   public Iterator<Set<T>> powerSetIterator() {
   
      Iterator<Set<T>> powerSorted = new PowerLinkedIterator(front, rear, size);
      return powerSorted;
   }



   //////////////////////////////
   // Private utility methods. //
   //////////////////////////////

   // Feel free to add as many private methods as you need.

   ////////////////////
   // Nested classes //
   ////////////////////

   //////////////////////////////////////////////
   // DO NOT CHANGE THE NODE CLASS IN ANY WAY. //
   //////////////////////////////////////////////

   /**
    * Defines a node class for a doubly-linked list.
    */
   class Node {
      /** the value stored in this node. */
      T element;
      /** a reference to the node after this node. */
      Node next;
      /** a reference to the node before this node. */
      Node prev;
   
      /**
       * Instantiate an empty node.
       */
      public Node() {
         element = null;
         next = null;
         prev = null;
      }
   
      /**
       * Instantiate a node that containts element
       * and with no node before or after it.
       */
      public Node(T e) {
         element = e;
         next = null;
         prev = null;
      }
   }
   
   private class LinkedIterator implements Iterator<T> {
      private Node current;
      private Node last;
      private int size;
      
      public LinkedIterator(Node front, Node rear, int sizeIn) {
      
         current = front;
         last = rear;
         size = sizeIn;
      }
      
      public boolean hasNext() {
         boolean result = current != null;
         return result;
      }
      
      public T next() {
      
         if (!hasNext()) {
            throw new NoSuchElementException();
         }
         
         T result = current.element;
         current = current.next;
         return result;
      }
   }
   
   private class ReverseLinkedIterator implements Iterator<T> {
      private Node current;
      private Node first;
      private int size;
      
      public ReverseLinkedIterator(Node front, Node rear, int sizeIn) {
      
         current = rear;
         first = front;
         size = sizeIn;
      }
      
      public boolean hasNext() {
         boolean result = current != null;
         return result;
      }
      
      public T next() {
      
         if (!hasNext()) {
            throw new NoSuchElementException();
         }
         
         T result = current.element;
         current = current.prev;
         return result;
      }
   }
   
   private class PowerLinkedIterator implements Iterator<Set<T>> {
      private Node current;
      private Node last;
      private int size;
      private int location;
      private int index;
      
      public PowerLinkedIterator(Node front, Node rear, int sizeIn) {
         current = front;
         last = rear;
         size = sizeIn;
      }
      
      public boolean hasNext() {
         boolean result = location < (int) Math.pow(2, size);
         return result;
      }
   
      public Set<T> next() {
      
         Set<T> powerSet = new LinkedSet<T>();
         int temp = 1;
         
         while (current != null) {
         
            if (index != 0 && temp != 0) {
               powerSet.add(current.element);
            }
            
            index++;
            current = current.next;
         }
         
         location++;
         return powerSet;
      }
   
   }

}
