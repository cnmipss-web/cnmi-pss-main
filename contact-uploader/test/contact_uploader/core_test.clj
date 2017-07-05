(ns contact-uploader.core-test
  (:require [clojure.test :refer :all]
            [contact-uploader.core :refer :all]
            [contact-uploader.validators :refer :all]))

(deftest test-parse-tel
  (testing "should correctly parse telephone numbers and add area code as needed"
    (is (= "" (parse-tel "NONE")))
    (is (= "(670) 555-5555" (parse-tel "(670) 555-5555")))
    (is (= "(670) 555-5555" (parse-tel "555-5555")))
    (is (= "(670) 237-3199/3024" (parse-tel "237-3199/3024")))
    (is (= "(670) 664-3751/62" (parse-tel "664-3751/62"))))) 

(deftest test-parse-data
  (testing "should correctly parse personnel contact data"
    (let [parsed (parse-data :personnel
                  ["MaryLou S. Ada, J.D., Chairwoman" "237-3027" "" "" "" "boe.ada@cnmipss.org"])
          {name :name} parsed
          {tel :tel} parsed
          {fax :fax} parsed
          {email :email} parsed]
      (is (= name "MaryLou S. Ada, J.D., Chairwoman"))
      (is (= tel "(670) 237-3027"))
      (is (= fax ""))
      (is (= email "boe.ada@cnmipss.org")))
    (let [parsed (parse-data :personnel
                  ["Jocelyn Jeter, Administrative Assistant" "237-3027" "287-3010" "664-3751/61" "664-3711" "jocelyn.jeter@cnmipss.org"])
          {name :name} parsed
          {tel :tel} parsed
          {fax :fax} parsed
          {email :email} parsed]
      (is (= name "Jocelyn Jeter, Administrative Assistant"))
      (is (= tel "(670) 237-3027, (670) 287-3010, (670) 664-3751/61"))
      (is (= fax "(670) 664-3711"))
      (is (= email "jocelyn.jeter@cnmipss.org")))
    (let [parsed (parse-data :personnel
                  ["Assessment Program - Fasefulu Tigilau" "237-3199/3024" "789-8739" "" "" "fasefulu.tigilau@cnmipss.org"])
          {name :name} parsed
          {tel :tel} parsed
          {fax :fax} parsed
          {email :email} parsed]
      (is (= name "Assessment Program - Fasefulu Tigilau"))
      (is (= tel "(670) 237-3199/3024, (670) 789-8739"))
      (is (= fax ""))
      (is (= email "fasefulu.tigilau@cnmipss.org"))))
  (testing "should correctly parse office contact data")
  (testing "should correclty parse school contact data"))

(deftest test-valid?-email
  (testing "should reject invalid emails"
    (is (not (valid-email? 1)))
    (is (not (valid-email? :email)))
    (is (not (valid-email? "email")))
    (is (not (valid-email? "emailgmail.com")))
    (is (not (valid-email? "@email@gmail.com")))
    (is (not (valid-email? "test.thing@thing")))
    (is (not (valid-email? "test^test")))
    (is (not (valid-email? "testing.com")))
    (is (not (valid-email? "testing@gmailcom"))))

  (testing "should accept valid emails"
    (is (valid-email? "tjscollins@gmail.com"))
    (is (valid-email? "tj.collins@gmail.com"))
    (is (valid-email? "asqwe123@qwera.org"))
    (is (valid-email? "asqertt123.asfgfdg@testing.gov"))
    (is (valid-email? "124rydfhdr7.dfyre6@thing.net"))
    (is (valid-email? "asdwetre@gdfaaer.edu"))))

(deftest test-validate-args
  (testing "should throw an error when first arg is not a keyword"
    (try 
      (validate-args "fail" "test")
      (is (= 0 1)) ;; fail if no error thrown
      (catch Exception e (is (isa? (type e) Exception))))
    (try
      (validate-args 1 "fail")
      (is (= 0 1)) ;; fail if no error thrown
      (catch Exception e (is (isa? (type e) Exception))))
    (try
      (validate-args true "fail")
      (is (= 0 1)) ;; fail if no error thrown
      (catch Exception e (is (isa? (type e) Exception)))))
  (testing "should throw an error when seond arg is not a string"
    (try
      (validate-args :true :fail)
      (is (= 0 1)) ;; fail if no error thrown
      (catch Exception e (is (isa? (type e) Exception))))
    (try
      (validate-args true 1)
      (is (= 0 1)) ;; fail if no error thrown
      (catch Exception e (is (isa? (type e) Exception))))
    (try
      (validate-args true false)
      (is (= 0 1)) ;; fail if no error thrown
      (catch Exception e (is (isa? (type e) Exception)))))
  (testing "should pass without errors when first arg is a keyword and second arg is a string"
    (try
      (validate-args :true "pass")
      (is (= 1 1))
      (catch Exception e (is (not (isa? (type e) Exception)))))))
