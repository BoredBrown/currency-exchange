CREATE TABLE IF NOT EXISTS currencies (
  currency_label varchar(450) NOT NULL,
  currency_value varchar(450) NOT NULL,
  PRIMARY KEY (currency_label)
);


CREATE TABLE IF NOT EXISTS exchange_rate (
  currency_label varchar(450) NOT NULL,
  exchange_rate_to_euro INT NOT NULL,
  PRIMARY KEY (currency_label)
);

